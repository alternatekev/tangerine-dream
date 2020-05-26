import { P} from '@alt/components'
import { ThemeContext} from '@alt/styles'
import { Layouts } from '@alt/types'

export default {
  title: 'Down Periscope',
  remoteUrl: 'https://houstonperiscope.com',
  subhead: 'DONALD LIPSKI & ELMENDORF/GEURTS',
  logo: 'https://www.houstonperiscope.com/static/img/partners/eg.svg',
  image: '/dp/card.png',
  url: '/visual/dp',
  id: 'dp',
  description: 'Real-Time Node.js Server Architecture, React Components',
  header: (
    <>
      <P large>
        Donald Lipski had designed and contracted to have built a very cool art project in Houston, Texas, that allows visitors to <a href="https://houstonperiscope.com">the Buffalo Bayou Park to peer down into the century-old cistern located underneath</a>. Website users would also be able to control the periscope itself.
        </P>
      <P large>The problem was it didn't work. That's where <a href="https://elmendorfgeurts.com">Elmendorf/Geurts</a> and I came in.</P>
    </>
  ),
  theme: ThemeContext.DP,
  body: {
    blocks: [
      {
        layout: Layouts.Left,
        mobileImage: '/dp/mobile1.png',
        image: '/dp/card.png',
        children: (
          <P>
            While Ryan tore down the hardware and rebuilt it from scratch, including a completely custom web server, I got to work on the client side.
          </P>
        )
      },
      {
        layout: Layouts.Right,
        image: '/dp/dp1.png',
        children: (
          <P>
            While this screenshot doesn't do the application justice (the applcation is down due to COVID-19 restrictions), you can see that we built a way to control a camera in 360-degree space as well as zoom in/zoom out. We even added a light switch. The Node server solution I built uses WebSockets to manage permission between multiple conccurrent web users, as well as on-site.
          </P>
        )
      }
    ]
  }
}