import {Page, Card, P, Medium, List, ListItem, ProjectImage} from '@alt/components'
import {ThemeContext} from '@alt/styles'
import {Layouts} from '@alt/types'
import {RelatedProjectCards, ProjectHeader, Block} from '@alt/views'

const Visual = () =>
  <Page
    title="WordPress.com"
    header="/visual.png"
    compact
    theme={ThemeContext.WP}
  >{() =>
    <>
      <Card level={2} middleStacked>
        <ProjectHeader subhead="CALYPSO" logo="/wp/wpcom-wmark.png">
          <P large>
              I worked at <Medium>Automattic</Medium> for six years, and two of them were spent on <strong>Calypso, an API- and JavaScript-powered UI for WordPress</strong>. Calypso runs the WordPress desktop app, the WordPress.com UI, influences the UX of the WordPress mobile app and is built using Node.js + React.
          </P>
        </ProjectHeader>
        <Card inflated borderless divider middleStacked megaWeighted>
            <ProjectImage alt="" src="/wp/wp1.png" />
          <P>
            WordPress.com is the largest installation of WordPress in the world with 131 million unique monthly users in the US. We were seeking to modernize our users’ experience by taking WordPress, which clearly still exists in its unchanged form and is in active development, abstract the core technology to an API, and build new experiences on top.
          </P>
        </Card >
          <Block image="/wp/wp2.png" layout={Layouts.Left} >
            <P compact>
              We had historically eschewed email, working together through the internally-developed P2 WordPress theme and IRC. Prior to Calypso, we usually launched code pretty quickly through Subversion to the main production codebase, and teams often iterated in silos, attending to their own needs first and foremost. Calypso changed all of that, moving a large portion of the design and development discussion to Slack and Github, adding beneficial layers of peer-based code and design review on top of each Pull Request. The end result was a more cohesive product, for us in the code and for our users in the experience. Designers started working more closely together on specific issues across teams, developers and designers collaborated in quicker iterations to get to better solutions, and the standards we used to build the app progressed along with evolving React and ES6 best practices
            </P>
          </Block>
          <Block image="/wp/Component-Map.png" layout={Layouts.Right} >
            <div>
              <P compact>
                Despite this increased flow of communication and priority-dovetailing, there were still inconsistencies within Calypso’s design. In September 2014, I organized a workshop for four designers to:
              </P>
              <List>
                {() => <>
                  <ListItem compact>Look at the UX we’d achieved at breakneck speed over the past year and a half</ListItem>
                  <ListItem compact>Find UI inconsistencies and gotchas</ListItem>
                  <ListItem compact>Provide recommendations on how to bring the app into a more pure Atomic Design model</ListItem>
                </>}
              </List>
              <P compact>Since we were already using React, this made for a perfect time to adopt a more standards-driven UI design process, placing the idea of functional components at the heart of the design language. We reviewed every page, outlined the parts of it that differed from the UX of other parts of the app, and made general recommendations for how to bring the application more in-line with itself.</P>
              <P compact>The result of these workshops were 6 lengthy internal blog posts outlining the changes that we felt should be made, and created much discussion. Some recommendations were implemented by other teams and some of them were decided against by the wider group of contributors.</P>
            </div>
          </Block>
          <Block image="/wp/wp3.png" layout={Layouts.Left} >
            <P>
              There was a third group of recommendations which were generally agreed upon by everyone, but were not going to be worked on by anyone, so I took it upon myself to get them finished. I took specific problems that the team had seen crop up over and over again and created Pull Requests in Github to address them. I re-engineered the interfaces in question to use core Calypso React components, got my designs and code reviewed by my peers, and launched them into production.
            </P>
          </Block>
      </Card>
      <RelatedProjectCards pid="wp" />
    </>
  }
  </Page>

export default Visual
