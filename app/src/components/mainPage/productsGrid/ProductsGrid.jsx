import { PlusCircleIcon } from 'icons'
import { formatNumberToMoneyString } from '@/utils/utils'

export function ProductsGrid({ handleAddItem, products }) {
  return (
    <ul className='col-span-2 grid max-h-[90vh] grid-cols-2 gap-2 overflow-y-auto p-2 md:grid-cols-4'>
      {products.map((product) => (
        <li
          key={product._id}
          className='relative inline-block rounded-md border border-[#1d1d1d] from-[#02DBFF] p-4 transition-all duration-200 ease-out hover:rotate-1 hover:scale-105 hover:cursor-pointer hover:bg-gradient-to-br hover:shadow-lg hover:shadow-[#02DBFF] active:scale-95'
          onClick={() => handleAddItem(product)}
        >
          <div className='flex flex-col justify-center'>
            <h3 className='font-bold'>
              {product.name} ({product.id_product_type.name})
            </h3>
            <p className='text-sm text-gray-600'>
              {formatNumberToMoneyString(product.unit_price)}
            </p>
          </div>
          <span className='absolute bottom-2 right-2 text-[#883AFF]'>
            <PlusCircleIcon />
          </span>
        </li>
      ))}
    </ul>
  )
}
