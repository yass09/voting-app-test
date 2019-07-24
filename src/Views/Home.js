import React from 'react';

import { NavigationLink } from '../components/presentational/NavigationLink';
import * as routes from '../constants/routes';
import Main from '../components/presentational/Main';

import surveyLogo from '../assets/vote.svg';
import { MainImg } from '../components/presentational/MainImg'
import { Title } from '../components/presentational/Title';

const Home = () => (
  <Main flexDirection={'column'}>
    <MainImg src={surveyLogo}/>
    <Title>Welcome to this Anime survey</Title>
    <NavigationLink className='btn btn-primary btn-lg' to={routes.SURVEY}>Take Survey !</NavigationLink>
  </Main>
)

export default Home;