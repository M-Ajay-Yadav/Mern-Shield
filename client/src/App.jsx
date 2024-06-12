import { BrowserRouter, Routes , Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";   
import Navbar from "./Components/Navbar/Navbar";
import Error from "./pages/Error";
import Footer from "./Components/Footer/Footer";
import Logout from "./pages/Logout";
import AdminLayout from "./Components/Layouts/AdminLayouts";
import AdminContacts from "./pages/AdminContacts";
import AdminUsers from "./pages/AdminUsers";
import AdminServices from "./pages/AdminServices";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>

      <Route path="/admin" element={<AdminLayout/>}>
        <Route path="users" element={<AdminUsers/>}/>
        <Route path="contacts" element={<AdminContacts/>}/>
        <Route path="adminservices" element={<AdminServices/>}/>

      </Route>

      <Route path="*" element={<Error/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      </div>
  )

}

export default App;