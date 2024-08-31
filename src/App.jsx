// React
import React, { lazy, Suspense } from "react";
// router
import { Routes, Route } from "react-router-dom";
// context
import AppContextProvider from "./context/AppContext.jsx";
// hook
import Login from "./page/login/Login.jsx";
import useWindowSize from "./util/Utility.tsx";

const Loading = lazy(() => import("./page/Loading/Loading.jsx"));
const SwitchAccounts = lazy(() => import("./page/login/SwitchAccounts.jsx"));
const Home = lazy(() => import("./page/home/Home.jsx"));
const Profile = lazy(() => import("./page/home/page/profile/Profile.jsx"));
const Search = lazy(() => import("./page/home/page/search/Search.jsx"));
const AddPost = lazy(() => import("./page/home/page/addPost/AddPost.jsx"));
const Likes = lazy(() => import("./page/home/page/likes/Likes"));

export default function App() {
  const { width } = useWindowSize();

  return (
    <>
      {width ?? 0 < 900 ? (
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/switchaccounts"
              element={
                <Suspense fallback={<Loading />}>
                  <SwitchAccounts />
                </Suspense>
              }
            />
            <Route
              path="/home"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/search"
              element={
                <Suspense fallback={<Loading />}>
                  <Search />
                </Suspense>
              }
            />
            <Route
              path="/addPost"
              element={
                <Suspense fallback={<Loading />}>
                  <AddPost />
                </Suspense>
              }
            />
            <Route
              path="/likes"
              element={
                <Suspense fallback={<Loading />}>
                  <Likes />
                </Suspense>
              }
            />
          </Routes>
        </AppContextProvider>
      ) : (
        <Loading />
      )}
    </>
  );
}
