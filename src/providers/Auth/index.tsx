'use client'

import { getClientSideURL } from '@data/getURL'
import type { User } from '@payload-types'
import type { Permissions } from 'payload'
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { USER, gql } from './gql'
import { rest } from './rest'
import type {
  AuthContext,
  Create,
  ForgotPassword,
  Login,
  Logout,
  ResetPassword,
} from './types'

const Context = createContext({} as AuthContext)

export const AuthProvider: React.FC<{
  api?: 'gql' | 'rest'
  children: React.ReactNode
}> = ({ api = 'rest', children }) => {
  const [user, setUser] = useState<null | User>()
  const [permissions, setPermissions] = useState<null | Permissions>(null)

  const create = useCallback<Create>(
    async (args) => {
      if (api === 'rest') {
        const user = await rest(`${getClientSideURL()}/api/users`, args)
        setUser(user)
        return user
      }

      if (api === 'gql') {
        const { createUser: user } = await gql(`mutation {
        createUser(data: { username: "${args.username}", email: "${args.email}", password: "${args.password}", firstName: "${args.firstName}", lastName: "${args.lastName}" }) {
          ${USER}
        }
      }`)

        setUser(user)
        return user
      }
    },
    [api],
  )

  const login = useCallback<Login>(
    async (args) => {
      if (api === 'rest') {
        const user = await rest(`${getClientSideURL()}/api/users/login`, args)
        setUser(user)
        return user
      }

      if (api === 'gql') {
        const { loginUser } = await gql(`mutation {
        loginUser(  email: "${args.email} || ${args.username}", password: "${args.password}") {
          user {
            ${USER}
          }
          exp
        }
      }`)

        setUser(loginUser?.user)
        return loginUser?.user
      }
    },
    [api],
  )

  const logout = useCallback<Logout>(async () => {
    if (api === 'rest') {
      await rest(`${getClientSideURL()}/api/users/logout`)
      await new Promise((resolve) => setTimeout(resolve, 300))
      setUser(null)
      return
    }

    if (api === 'gql') {
      await gql(`mutation {
        logoutUser
      }`)

      await new Promise((resolve) => setTimeout(resolve, 300))
      setUser(null)
    }
  }, [api])

  // On mount, get user and set
  useEffect(() => {
    const fetchMe = async () => {
      if (api === 'rest') {
        const user = await rest(
          `${getClientSideURL()}/api/users/me`,
          {},
          {
            method: 'GET',
          },
        )
        setUser(user)
      }

      if (api === 'gql') {
        const { meUser } = await gql(`query {
          meUser {
            user {
              ${USER}
            }
            exp
          }
        }`)

        setUser(meUser.user)
      }
    }

    void fetchMe()
  }, [api])

  const forgotPassword = useCallback<ForgotPassword>(
    async (args) => {
      if (api === 'rest') {
        const user = await rest(
          `${getClientSideURL()}/api/users/forgot-password`,
          args,
        )
        setUser(user)
        return user
      }

      if (api === 'gql') {
        const { forgotPasswordUser } = await gql(`mutation {
        forgotPasswordUser(email: "${args.email}")
      }`)

        return forgotPasswordUser
      }
    },
    [api],
  )

  const resetPassword = useCallback<ResetPassword>(
    async (args) => {
      if (api === 'rest') {
        const user = await rest(
          `${getClientSideURL()}/api/users/reset-password`,
          args,
        )
        setUser(user)
        return user
      }

      if (api === 'gql') {
        const { resetPasswordUser } = await gql(`mutation {
        resetPasswordUser(password: "${args.password}", token: "${args.token}") {
          user {
            ${USER}
          }
        }
      }`)

        setUser(resetPasswordUser.user)
        return resetPasswordUser.user
      }
    },
    [api],
  )

  return (
    <Context.Provider
      value={{
        create,
        forgotPassword,
        login,
        logout,
        permissions,
        resetPassword,
        setPermissions,
        setUser,
        user,
      }}
    >
      {children}
    </Context.Provider>
  )
}

type UseAuth = () => AuthContext

export const useAuth: UseAuth = () => useContext(Context)
