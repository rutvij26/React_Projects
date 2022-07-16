import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import messages from './messages';
import H1 from '../H1/index';

function Header() {
  return (
    <div>
      <NavBar>
        <H1>
          <FormattedMessage {...messages.companyName} />
        </H1>
        {/* <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink> */}
      </NavBar>
    </div>
  );
}

export default Header;
