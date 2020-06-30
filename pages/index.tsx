import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'
import { withSession } from '@td/utils/Session'

import {Pages, User, UserMeta, Dispensary, AgeVerification} from '@td/types'
import {defaults, wpUrls, convertWpToTs} from '@td/data'
import {mergeConfig} from '@td/utils'
import fetchWpData from '@td/data/fetchWpData'

interface Props {
  user: User
  userMeta: UserMeta
  prodUrl: string
  wpUrl: string
  wpData: Dispensary
}

export default ({
  user,
  prodUrl,
  wpUrl,
  userMeta,
  wpData
}: Props) =>
  <Page
    config={mergeConfig('pages', wpData)}
    page={Pages.Age}
    name="Tangerine Dream"
    prodUrl={prodUrl}
    wpUrl={wpUrl}
    user={user}
    userMeta={userMeta}
    menuDividers={[2]}
  >
    {(_, formikProps) => 
    <>
      <AgeVerificationForm 
        {...formikProps.values.pages.age}
      />
    </>
    }
  </Page>

export const getServerSideProps = withSession(async function ({req}) {
  const user = await req.session.get('user') || null
  const userMeta = req.session.get('userMeta') || null
  const prodUrl = process.env.PROD_URL
  const wpUrl = process.env.WP_URL
  const wpData = await fetchWpData(`${wpUrl}${wpUrls.age}`, 'GET')
  const age = convertWpToTs(Pages.Age, wpData)
  const pages = defaults.pages
  pages.age = age as AgeVerification
  console.log(age)

  return {
    props: {
      user, 
      userMeta, 
      prodUrl, 
      wpUrl,
      wpData: pages
    },
  }
})
