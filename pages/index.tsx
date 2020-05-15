import {Page, Card, Avatar, Layout, Divider, P, List, ListItem, ListItemProps} from '@alt/components'
import {Layouts} from '@alt/types'

const listItemProps: ListItemProps = {
  compact: true,
  centerAlignIcon: true,
  divider: true
}

const Home = () => <Page title="Hello :)">
<Card stacked level={2}>
  <P large><strong>I'm Kevin,</strong> and I’ve been working to make the internet more usable, friendly, and fun since 1999. I’ve developed an incredibly effective way of achieving interaction design using a blend of traditional design tools and code; I see HTML as the fabric of the web, and its designers should know how to weave it. I’m here to have an impact on real users, in the real world, with real software.</P>
  <Divider weighted level={0} />
  <Layout kind={Layouts.MidRight}>
    <div>
        <Card fullBleed borderless alignRight><Avatar img="/MCM_0894.png" circle size={280} /></Card>
        <P compact alignRight superWeighted><em>Over the course of my career, I’ve run the gamut of user experience design, user interface design, interaction design, interactive prototyping, data visualization and content strategy. I believe in the power of the internet to bring people together and I worry about its tendency to drive us apart.</em></P>
        <Divider weighted level={0} />
        <P compact alignRight><em>Over the course of my career, I’ve run the gamut of user experience design, user interface design, interaction design, interactive prototyping, data visualization and content strategy. I believe in the power of the internet to bring people together and I worry about its tendency to drive us apart.</em></P>
    </div>
    <div>
        <P>I’ve written extensively about <a href="https://alternatekev.me">my work history on my blog</a>, so you can read that if you’re interested. If you’re short on time or just want the highlights, some clients I’ve worked on include:</P>
        <Layout>
          <List>
            {() => <>
              <ListItem {...listItemProps}>Community Funded / 2017 - 2020</ListItem>
              <ListItem {...listItemProps}>Project Catchfly / CA Technologies / 2016</ListItem>
              <ListItem {...listItemProps}>WordPress.com / 2012 – 2016</ListItem>
              <ListItem {...listItemProps}>Polldaddy / 2010 – 2012</ListItem>
              <ListItem {...listItemProps}>Dynavox / 2010</ListItem>
              <ListItem {...listItemProps}>State of Wisconsin / 2009</ListItem>
              <ListItem {...listItemProps}>Commonwealth of Pennsylvania / 2009</ListItem>
              <ListItem {...listItemProps}>Barclay’s / iShares / 2009</ListItem>
              <ListItem {...listItemProps}>The New York Times / 2006 – 2008</ListItem>
              <ListItem {...listItemProps}>BlackRock / 2007 – 2009</ListItem>
              <ListItem {...listItemProps}>Merrill Lynch / 2005 – 2009</ListItem>
            </>}
          </List>
          <List>
           {() => <>
              <ListItem {...listItemProps}>Bank of America / 2005 – 2006</ListItem>
              <ListItem {...listItemProps}>Great-West Healthcare / 2005</ListItem>
              <ListItem {...listItemProps}>Echostar / 2004</ListItem>
              <ListItem {...listItemProps}>Discount.com / 2003 – 2004</ListItem>
              <ListItem {...listItemProps}>Einstein’s Bagels / 2002 – 2003</ListItem>
              <ListItem {...listItemProps}>Liberation Media / 2002</ListItem>
              <ListItem {...listItemProps}>Executive Wealth Management / 2001 – 2002</ListItem>
              <ListItem {...listItemProps}>Ping Identity / 2001 – 2004</ListItem>
              <ListItem {...listItemProps}>Jabber / Jabber.com / 2000 – 2001</ListItem>
              <ListItem {...listItemProps}>Worldwide Pants / David Letterman Show / 1999</ListItem>
            </>}
          </List>
        </Layout>
    </div>
  </Layout>
</Card>

</Page>

export default Home
