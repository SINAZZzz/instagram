import Login from "./page/login/Login";
import Loading from "./page/Loading/Loading";
import {Routes , Route} from 'react-router-dom'
import { lazy , Suspense} from "react";

const SwitchAccounts = lazy(() => import('./page/login/SwitchAccounts'))
export default function App() {
 
  return ( 
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/switchaccounts" element={<Suspense fallback={<Loading />}><SwitchAccounts /></Suspense>} />
    </Routes>
  )
}
