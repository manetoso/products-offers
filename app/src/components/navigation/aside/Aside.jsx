import { Close } from 'icons'
import { AsideButton } from './'
import { IconButton } from '../'

/**
 *
 * @param {{menuCheckboxId: string }} props
 * @returns {JSX.Element} Aside component
 */
export function Aside({ menuCheckboxId }) {

  const handleLogout = () => {
    alert('logout')
  }
  return (
    <aside id='aside' className='bg-[#f1f1f1]'>
      <IconButton alignSelf htmlFor={menuCheckboxId}>
        <Close />
      </IconButton>
      <ul className='flex flex-col gap-2 overflow-y-auto'>
        <li className='mt-6'>
          <AsideButton isActive label='Salir' onClick={handleLogout} />
        </li>
      </ul>
    </aside>
  )
}
