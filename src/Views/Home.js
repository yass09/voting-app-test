import React from 'react';

import { NavigationLink } from '../components/presentational/NavigationLink';
import * as routes from '../constants/routes';
import Main from '../components/presentational/Main';

const Home = () => (
  <Main>
    <NavigationLink className='btn btn-primary' to={routes.SURVEY}>Take Survey !</NavigationLink>
  </Main>
)

export default Home;