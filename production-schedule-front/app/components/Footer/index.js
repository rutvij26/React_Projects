import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>{/* <LocaleToggle /> */}</section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A>VOA CANADA TEAM (BDAT)</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
