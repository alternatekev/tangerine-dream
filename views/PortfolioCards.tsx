import React, {FC} from 'react'
import {portfolio} from '@alt/types/portfolio_content'

import {PortfolioCard} from '@alt/views'

export const PortfolioCards: FC = () =>
  <>
    {portfolio.map((item, i) => <PortfolioCard weighted={i <= portfolio.length} level={3} flat {...item} />)}
  </>
