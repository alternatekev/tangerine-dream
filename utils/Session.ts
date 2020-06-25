import { withIronSession, Handler} from 'next-iron-session'

export function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'token',
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  },
  )
}
