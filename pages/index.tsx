import {ApolloError, ApolloQueryResult} from '@apollo/client'
import gql from 'graphql-tag'

import {Page} from '@td/globals'
import {AgeVerificationForm} from '@td/views'

import {Pages, User, UserMeta} from '@td/types'
import {defaults, convertWpToTs, initializeApollo, WP} from '@td/data'
import {mergeConfig} from '@td/utils'
import {NextPage, NextPageContext} from 'next'

export const AGE_VERIFICATION_QUERY = gql`
  query GET_PAGE {
    page(id: 434, idType: DATABASE_ID) {
      title
      backgroundImage {
        horizontalalignment
        image {
          altText
          sourceUrl(size: LARGE)
        }
        verticalalignment
      }
      content
      ageVerificationCheckbox {
        displaycheckbox
      }
      actionButton {
        horizontalalignment
        inverted
        lineheight
        size
        text
        verticalalignment
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      pageLayout {
        fieldGroupName
        horizontalalignment
        pagetemplate
        verticalalignment
      }
    }
  }
 ` 

interface Props {
  user?: User
  error?: ApolloError
  userMeta?: UserMeta
  wpData: ApolloQueryResult<WP.AgeVerification>
}

const AgeVerificationPage: NextPage<Props> = ({
  user,
  wpData,
  userMeta,
}: Props) => {

  const data = convertWpToTs(Pages.Age, wpData.data)

  return  (
    <Page
      config={wpData ? mergeConfig('pages', {
        age: data
      }) : defaults}
      page={Pages.Age}
      name="Tangerine Dream"
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
  )
}

export async function getServerSideProps({res}: NextPageContext) {
  res?.setHeader('Cache-Control', 's-maxage=1')
  const apolloClient = initializeApollo({}, process.env.WP_URL || '')
  const raw = await apolloClient.query({
    query: AGE_VERIFICATION_QUERY,
  }).then(response => response)

  return {
    props: {
      wpData: raw,
    }
  }
}

export default AgeVerificationPage
