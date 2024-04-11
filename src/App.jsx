import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import {Provider} from "react-redux"
import { store } from './features/store.js'

import Login from "./components/Login"
import CompanyInfo from "./components/CompanyInfo.jsx"
import Portfolio from "./components/Portfolio.jsx"
import PersonalDetails from "./components/PersonalDetails.jsx"


function App() {

  return (
    <BrowserRouter>
    
    <Provider store={store}>
      <Link to="/">Login</Link>
      <Link to="/company-info">Company Info</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/personal">Personal</Link>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/company-info" element={<CompanyInfo />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/personal" element={<PersonalDetails />}/>
      </Routes>
    </Provider>
    </BrowserRouter>
  )
}

export default App