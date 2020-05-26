import OpenInNewIcon from 'mdi-react/OpenInNewIcon'
import Link from 'next/link'

import { P, Card, Button } from '@alt/components'
import { ThemeContext, } from '@alt/styles'
import { Layouts, Alignment } from '@alt/types'
import { ProjectImage } from '@alt/components/ProjectImage'

export default {
  title: 'Rule Gallery',
  remoteUrl: '"https://rulegallery.com',
  subhead: 'WORDPRESS & REACT / WOOCOMMERCE',
  logo: '/rl/logo.png',
  image: '/rl/card.png',
  url: '/visual/rl',
  id: 'rl',
  description: 'WordPress & WooCommerce Design & Build, React Components',
  header: (
    <P large>
      Rule is one of Denver's premier art galleries, representing some of the most talked-about names in both Denver and Marfa, Texas.
    </P>
  ),
  theme: ThemeContext.NYT,
  body: {
    special: (
      <Card borderless middleStacked inflated>
        <ProjectImage src="/rl/card.png" alt="" />
        <P>
          Leveraging a sleek, minimalist feel, this website was a joy to work on, letting white space breathe, and giving the artwork space to speak for itself.
          </P>
      </Card>
    ),
    blocks: [
      {
        image: '/rl/rl1.png',
        alignMobile: Alignment.Right,
        mobileImage: '/rl/mobile1.png',
        layout: Layouts.Right,
        children: (
          <P>
            This site uses Advanced Custom Fields for custom post types, Timber for templating, and a statically-built React app for browsing art.
          </P>
        )
      },
      {
        image: '/rl/rl2.png',
        mobileImage: '/rl/mobile2.png',
        alignMobile: Alignment.Right,
        layout: Layouts.Equal,
        children: (
          <ProjectImage src="/rl/rl3.png" alt="" />
        )
      },
      {
        image: '/rl/rl4.png',
        mobileImage: '/rl/mobile3.png',
        alignMobile: Alignment.Right,
        layout: Layouts.Equal,
        children: (
          <P>
            Due to COVID-19 restrictions, the gallery cannot be open to the public. We quickly put together a WooCommerce site to get cash flowing to the artsists in need again.
          </P>
        ),
        action: (
          <Button icon={<OpenInNewIcon size={15} />} block compact tertiary alignCenter external href="https://shop.rulegallery.com">View the Shop</Button>
        )
      }
    ]
  }
}