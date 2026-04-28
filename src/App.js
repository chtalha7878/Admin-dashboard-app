import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideNav from "./components/sidenav/SideNav";
import TopNav from "./components/topnav/TopNav";
import CreateUser from "./pages/createuser/CreateUser";
import Home from "./pages/home/Home";
import ProductList from "./pages/productlist/ProductList";
import UserList from "./pages/userlist/UserList";
import UserProfile from "./pages/userprofile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen w-full bg-gray-50 text-gray-800">
        <TopNav />
        <div className="flex flex-1 overflow-hidden relative">
          <SideNav />
          <main className="flex-1 overflow-y-auto w-full">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/userlist" element={<UserList />}></Route>
              <Route path="/user/:userId" element={<UserProfile/>}></Route>
              <Route path="/createuser" element={<CreateUser/>}></Route>
              <Route path="/productlist" element={<ProductList/>}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
