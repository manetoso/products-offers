import { PageTransition } from '@/components/layout/PageTransition'
import { OrderInfo, ProductsGrid } from '@/components/mainPage'
import { Loader } from '@/components/layout'

import { useOffersData } from '@/hooks/useOffersData'

export function Home() {
  const {
    discount,
    handleAddItem,
    handleRemoveItems,
    products,
    selectedItems,
    total,
    isLoading
  } = useOffersData()

  if (isLoading) return <Loader />

  return (
    <PageTransition>
      <main className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <ProductsGrid handleAddItem={handleAddItem} products={products} />
        <OrderInfo
          discount={discount}
          handleRemoveItems={handleRemoveItems}
          selectedItems={selectedItems}
          total={total}
        />
      </main>
    </PageTransition>
  )
}
