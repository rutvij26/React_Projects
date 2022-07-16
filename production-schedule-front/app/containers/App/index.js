/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import Theme from '../ThemeProvider/index';

const AppWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <Theme>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - VOA CANADA"
          defaultTitle="Production Schedule Tool"
        >
          <meta
            name="description"
            content="Production Schedule generator for VOA CANADA (AUTOLIV)"
          />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/features" component={FeaturePage} /> */}
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </Theme>
  );
}
