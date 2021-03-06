import React from 'react'

import {
  BalancesWrapper,
  Header,
  HeaderText,
  Wrapper
} from 'components/Balances'
import { FormattedMessage } from 'react-intl'
import { Icon } from 'blockchain-info-components'
import BchWatchOnlyBalance from './BchWatchOnlyBalance'
import BtcWatchOnlyBalance from './BtcWatchOnlyBalance'

const Template = props => (
  <Wrapper>
    <Header onClick={props.handleToggle}>
      <HeaderText size='14px'>
        <Icon name='forbidden' size='12px' style={{ marginRight: '10px' }} />
        <FormattedMessage
          id='layouts.wallet.menutop.balance.walletbalance.nonspendable'
          defaultMessage='Non-Spendable'
        />
      </HeaderText>
      <Icon
        name='caret'
        size='10px'
        className={props.isActive ? 'active' : ''}
      />
    </Header>
    <BalancesWrapper className={props.isActive ? 'active' : ''}>
      <BtcWatchOnlyBalance />
      <BchWatchOnlyBalance />
    </BalancesWrapper>
  </Wrapper>
)

export default Template
