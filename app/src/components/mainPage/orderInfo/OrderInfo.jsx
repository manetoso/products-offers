import { TrashIcon, CurrencyDollarIcon } from 'icons'
import { formatNumberToMoneyString } from '@/utils/utils'

export function OrderInfo({
  selectedItems,
  total,
  discount,
  handleRemoveItems
}) {
  const handlePay = () => {
    console.log({ selectedItems, total, discount })
  }
  return (
    <section
      id='order-info'
      className='flex max-h-[80vh] flex-col gap-4 rounded-md border border-[#1d1d1d] p-2'
    >
      <button
        className='btn bg-[#FEB23F] hover:bg-[#FEB23F]/80'
        onClick={handleRemoveItems}
      >
        <span className='flex items-center text-lg'>
          Descartar
          <TrashIcon />
        </span>
      </button>
      <div className='flex grow flex-col gap-2 overflow-y-auto'>
        {selectedItems.map((item) => (
          <div
            key={item._id}
            className='rounded-md border bg-gradient-to-br from-[#02DBFF] p-2 shadow-md shadow-[#02DBFF]'
          >
            <h3 className='font-bold'>{item.name}</h3>
            <p>
              {formatNumberToMoneyString(item.unit_price)} x {item.quantity} ={' '}
              {formatNumberToMoneyString(item.unit_price * item.quantity)}
            </p>
            {item.discount !== undefined && (
              <p>
                -{formatNumberToMoneyString(item.discount)} (descuento) ={' '}
                {formatNumberToMoneyString(
                  item.unit_price * item.quantity - item.discount
                )}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        <span className='flex items-center justify-between'>
          <h3>Total descuento:</h3>
          <p>{formatNumberToMoneyString(discount)}</p>
        </span>
        <span className='flex items-center justify-between'>
          <h3>Total:</h3>
          <p>{formatNumberToMoneyString(total)}</p>
        </span>
        <button
          className='btn bg-[#883AFF] hover:bg-[#883AFF]/80'
          onClick={handlePay}
        >
          <span className='flex items-center text-lg'>
            Pagar
            <CurrencyDollarIcon />
          </span>
        </button>
      </div>
    </section>
  )
}
