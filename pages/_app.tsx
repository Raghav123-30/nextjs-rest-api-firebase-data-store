import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import { Provider } from 'react-redux'
import store from '@/store' 
import { useDispatch,useSelector } from 'react-redux'
import { State } from '@/State'
import Dashboard from './Dashboard'
export default function App({ Component, pageProps }: AppProps) {

  

  
  return (
    <div>
      <Provider store={store}>
        <Dashboard/>
       <Component {...pageProps} />
      </Provider>
    </div>
  )
}
