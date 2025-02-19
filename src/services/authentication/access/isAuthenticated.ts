import type { User } from '@payload-types'
import type { AccessArgs, FieldAccess } from 'payload'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const isAuthenticated: isAuthenticated = ({ req: { user } }) => {
  return Boolean(user)
}

export const isAuthenticatedFieldLevel: FieldAccess = ({ req: { user } }) => {
  return Boolean(user)
}
