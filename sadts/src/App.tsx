import { FC } from 'react';
import Navbar from './NavBar';
import Title from './Title';
import MainGrid from './MainGrid';
import Socials from './Socials';
import Raccoon from './Raccoon';
import './App.css'

const App: FC<{}> = () => {
  return <>
      <Navbar/>
      <Title/>
      <MainGrid/>
      <Socials/>
      <Raccoon/>
    </>
}

export default App
