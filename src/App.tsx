import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./pages/root";
import Auth from "./pages/auth";
import Search from "./pages/search";
import PersonalDetails from "./pages/auth/personalDetails";
import AddressDetails from "./pages/auth/addressDetails";
import Cart from "./pages/cart";
import BankPage from "./pages/bank";
import Login from "./pages/auth/login";
import PinPass from "./pages/auth/pinPass";
import Credentials from "./pages/auth/credentials";
import Requests from "./pages/requests";
import Orders from "./pages/orders";
import Deliveries from "./pages/dorders";
import PlaceQoute from "./pages/quote";
import Faq from "./pages/faq";
import BusinessDetails from "./pages/auth/businessDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/personal-details" element={<PersonalDetails />} />
        <Route path="/auth/address-details" element={<AddressDetails />} />
        <Route path="/auth/business-details" element={<BusinessDetails />} />
        <Route path="/auth/credentials" element={<Credentials />} />
        <Route path="/search" element={<Search />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/pin-pass" element={<PinPass />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bank" element={<BankPage />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/deliveries" element={<Deliveries />} />
        <Route path="/product/:id/quote" element={<PlaceQoute />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}
