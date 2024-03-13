import React from "react";
import Header from "./Main/Header";
import Footer from "./Main/Footer";
import { Route,Routes } from "react-router-dom";
import Sample from "./Dashboard/Sample";
import HeaderTwo from "./Main/HeaderTwo";
import FootTwo from "./Main/FootTwo";
import MakeupProducts from "./Dashboard/MakeupProducts";
import ImageUploadForm from "./Dashboard/ImageUploadForm";
import MensFashion from "./Dashboard/MensFashion";
import SearchResults from "./SearchResults";
import ProductDetail from "./Dashboard/ProductDetail";
import Signin from "./SignIn/Signin";
import Register from "./SignIn/Register";
import Cart from "./Cart/Cart";
import SmartProd from "./Dashboard/SmartProd";
import ValueProd from "./Dashboard/ValueProd";
import Dress from "./Dashboard/Dress";
import HistoryProd from "./Dashboard/HistoryProd";
import WFH from "./Dashboard/WFH";
import Indian from "./Dashboard/Indian";
import OneplusProd from "./Dashboard/OneplusProd";
import Mobiles from "./Dashboard/Mobiles";
import Profile from "./Profilepage";
const App = () => {
  return(
    <div>
      <Header />
      <HeaderTwo />
      <Routes>
        <Route path="/" element={<Sample />}/>
        <Route path="/mobile" element={<Mobiles />}/>
        <Route path="/category/makeup" element={<MakeupProducts />} />
        <Route path="/uploadImage" element={<ImageUploadForm />} />
        <Route path="/category/home-essentials" element={<MensFashion />} />
        <Route path="/category/smart-gadgets" element={<SmartProd />} />
        <Route path="/category/Dress" element={<Dress />} />
        <Route path="/category/History" element={<HistoryProd />} />
        <Route path="/category/value-bazaar" element={<ValueProd />} />
        <Route path="/category/WFH" element={<WFH />} />
        <Route path="/category/indian-brands" element={<Indian />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/category/oneplus" element={<OneplusProd />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/profile/:email" element={<Profile/>}/>
      </Routes>
      <FootTwo />
      <Footer />
    </div>
  )
}

export default App