import { getClientSideURL } from '@data/getURL'

export const USER = `
  id
  email
  username
  firstName
  lastName
`

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const gql = async (query: string): Promise<any> => {
  try {
    const res = await fetch(`${getClientSideURL()}/api/graphql`, {
      body: JSON.stringify({
        query,
      }),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { data, errors } = await res.json()

    if (errors) {
      throw new Error(errors[0].message)
    }

    if (res.ok && data) {
      return data
    }
  } catch (e: unknown) {
    throw new Error(e as string)
  }
}
