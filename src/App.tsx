import { lazy , Suspense} from "react";
import Login from "./page/login/Login";
import Loading from "./page/Loading/Loading";
import {Routes , Route} from 'react-router-dom'

const SwitchAccounts = lazy(() => import('./page/login/SwitchAccounts'))
const Home = lazy(() => import('./page/home/Home'))

export default function App() {
 
  return ( 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/switchaccounts" element={<Suspense fallback={<Loading />}><SwitchAccounts /></Suspense>} />
      <Route path="/home" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
    </Routes>
  )
}
