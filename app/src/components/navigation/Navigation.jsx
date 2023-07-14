import { useId, useRef } from 'react'

import { Aside, IconButton } from './'
import { ChevronBack, Menu } from 'icons'

import './navigation.css'

export function Navigation() {
  const menuCheckboxId = useId()
  const inputRef = useRef()
  return (
    <>
      <nav className='fixed top-0 z-50 flex w-screen gap-2 bg-[#f1f1f1] py-2 px-4 border-b-2 border-black'>
        <IconButton htmlFor={menuCheckboxId}>
          <Menu />
        </IconButton>
        {window.location.pathname !== '/app' && (
          <IconButton onClick={() => history.back()}>
            <ChevronBack />
            Atras
          </IconButton>
        )}
      </nav>
      <input id={menuCheckboxId} ref={inputRef} type='checkbox' hidden />
      <label id='aside-bg' htmlFor={menuCheckboxId} />
      <Aside menuCheckboxId={menuCheckboxId} inputRef={inputRef} />
    </>
  )
}
