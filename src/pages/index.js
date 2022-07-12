import Head from 'next/head'
import { GlobalContext } from '../../context/globalContext';
import HomePage from '../components/Home';

const Home = () => {

  return (
    <>
        <GlobalContext>
            <HomePage/>
        </GlobalContext>
    </>
  )
}

export default Home;
