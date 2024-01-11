import { lazy , Suspense} from "react";
import Login from "./page/login/Login";
import Loading from "./page/Loading/Loading";
import {Routes , Route} from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'

const SwitchAccounts = lazy(() => import('./page/login/SwitchAccounts'))
const Home = lazy(() => import('./page/home/Home'))
const Profile = lazy(() => import('./page/home/page/profile/Profile.jsx'))
const Search = lazy(() => import('./page/home/page/search/Search.jsx'))
const AddPost = lazy(() => import('./page/home/page/addPost/AddPost.jsx'))
const Likes = lazy(() => import('./page/home/page/likes/Likes.jsx'))

export default function App() {
 
  return ( 
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/switchaccounts" element={<Suspense fallback={<Loading />}><SwitchAccounts /></Suspense>} />
        <Route path="/home" element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path="/profile" element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
        <Route path="/search" element={<Suspense fallback={<Loading />}><Search /></Suspense>} />
        <Route path="/addPost" element={<Suspense fallback={<Loading />}><AddPost /></Suspense>} />
        <Route path="/likes" element={<Suspense fallback={<Loading />}><Likes /></Suspense>} />
      </Routes> 
    </AppContextProvider>
  )
}
