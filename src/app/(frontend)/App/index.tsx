import { cn } from '@utils/ui'
import React from 'react'
import { NavWrapper } from './nav-wrapper'

export const App: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main
      className={cn(
        'relative z-1',
        'min-h-[100dvh] max-w-[100vw]',
        'flex flex-col',
        //
      )}
    >
      <NavWrapper>{children}</NavWrapper>
    </main>
  )
}
