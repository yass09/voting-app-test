import React from 'react';

import Main from '../components/presentational/Main';
import { MainImg } from '../components/presentational/MainImg'
import { Title } from '../components/presentational/Title';

import notFoundImg from '../assets/404.svg';


const NotFound = () => (
  <Main flexDirection={'column'}>
    <MainImg src={notFoundImg}/>
    <Title>Oops...Page not Found</Title>
  </Main>
);

export default NotFound;