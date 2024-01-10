import { lazy , Suspense} from "react";
import Login from "./page/login/Login";
import Loading from "./page/Loading/Loading";
import {Routes , Route} from 'react-router-dom'
import LoginContextProvider from './context/LoginContext.jsx'

const SwitchAccounts = lazy(() => import('./page/login/SwitchAccounts'))
const Home = lazy(() => import('./page/home/Home'))

export default function App() {
 
  return ( 
    <LoginContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/switchaccounts" element={<Suspense fallback={<Loading />}><SwitchAccounts /></Suspense>} />
        <Route path="/home" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      </Routes> 
    </LoginContextProvider>
  )
}
