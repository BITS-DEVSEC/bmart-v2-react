import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./pages/root";
import Auth from "./pages/auth";
import Search from "./pages/search";
import PersonalDetails from "./pages/auth/personalDetails";
import Cart from "./pages/cart";
import BankPage from "./pages/bank";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/personal-details" element={<PersonalDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bank" element={<BankPage />} />
        <Route path="*" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}
