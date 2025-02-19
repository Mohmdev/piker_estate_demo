import { getDynamicMeta } from '@data/getDynamicMeta'
import { getServerSideURL } from '@data/getURL'
import type { User } from '@payload-types'
import { generateEmailHTML } from './generateEmailHTML'

type GenerateVerificationEmailArgs = {
  token: string
  user: User
}

export const generateVerificationEmail = async (
  args: GenerateVerificationEmailArgs,
): Promise<string> => {
  const { token, user } = args
  const { siteName } = await getDynamicMeta()

  return generateEmailHTML({
    content: `<p>Hi${user.firstName ? ' ' + user.firstName : ' @' + user.username}! Verify your account by clicking the button below.</p>`,
    cta: {
      buttonLabel: 'Verify',
      url: `${getServerSideURL()}/verify?token=${token}&email=${user.email}`,
    },
    headline: `Verify your account | ${siteName}`,
  })
}
