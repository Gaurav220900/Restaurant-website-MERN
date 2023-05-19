import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import AddFood from "./pages/AddFood";
import UpdateFood from './pages/UpdateFood';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/addFood' element= {<AddFood />} />
        <Route path= '/updateFood/:id' element= {<UpdateFood />} />
        <Route path= '/login' element = {<Login />} />
        <Route path= '/signUp' element = { <SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
