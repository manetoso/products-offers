import { Link } from 'react-router-dom'
import { PageTransition } from '@/components/layout/PageTransition'

export function NotFound() {
  return (
    <PageTransition>
      <div className='grid min-h-screen content-center justify-center'>
        <h3 className='text-3xl font-black'>Ruta no Encontrada!</h3>
        <Link className='btn' to='/app'>
          Volver al inicio
        </Link>
      </div>
    </PageTransition>
  )
}
