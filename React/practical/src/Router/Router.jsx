
import {BrowserRouter, Route, Routes} from 'react-router'
import UseEffect from '../Hooks/UseEffect'
import DataFetching from '../Hooks/DataFetching'
import Productdetail from '../Hooks/Productdetail'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<UseEffect/>}></Route>
        <Route path='/datafetching' element={<DataFetching/>}> </Route>
        <Route path='/datafetching/:id'element={< Productdetail />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router
