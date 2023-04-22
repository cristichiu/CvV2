import { useState, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import '../setPublic/scss/index.scss'
import '../setPublic/scss/colors/index.scss'

const General = lazy(() => import("./pages/general"))
const Loading = lazy(() => import("./components/loading"))
const HomeRedirect = lazy(() => import("./components/homeRedirect"))

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const body = document.getElementsByTagName("body")[0]
    if(theme) { body.classList.add(theme) } else { body.classList.add("gray") }
  }, [])
  return (<>
  <BrowserRouter>
    <Suspense fallback={<div className='loadingContainer'><Loading /></div>}>
      <Routes>
        <Route path='home' element={<General />}></Route>
        {/* <Route path='home' element={<Home />}></Route>
        <Route path='despre' element={<Despre />}></Route>
        <Route path='proiecte' element={<Proiecte />}></Route>
        <Route path='abilitati' element={<Abilitati />}></Route> */}
        <Route path='*' element={<HomeRedirect />} ></Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
  </>)
}

export default App
