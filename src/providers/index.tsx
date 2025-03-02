import React from 'react'
import { AuthProvider } from './Auth'
import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { QueryProvider } from './tanstack/QueryProvider'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <HeaderThemeProvider>
        <QueryProvider>
          <AuthProvider api="rest">{children}</AuthProvider>
        </QueryProvider>
      </HeaderThemeProvider>
    </ThemeProvider>
  )
}
