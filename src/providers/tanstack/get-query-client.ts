import { QueryClient, isServer } from '@tanstack/react-query'

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  })
}

// We put it in a variable to store it outside render cycles of react and nextjs
// This avoids creating a new instance on every call
let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (isServer) {
    return createQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = createQueryClient()

    return browserQueryClient
  }
}
