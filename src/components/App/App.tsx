import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../../routes';
import { FullScreenBox, mediaQueryMixin } from '../../styles';

const AppBox = styled(FullScreenBox)`  
  background-color: rgba(0, 0, 0, 0.8);
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  height: 80%;
  padding: 1.5em;
  background-color: #ffffff;

  ${mediaQueryMixin({
  max: 768,
  style: `
    width: 100%;
    height: 100%;
  `})}
`;

const App: FunctionComponent = () =>
  <AppBox>
    <Content>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => (
              route.component ? <route.component {...props} /> : <Redirect to={route.redirect} />
            )}
          />
        ))}
      </Switch>
    </Content>
  </AppBox>

export default App;
