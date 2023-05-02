import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Helmet from "react-helmet";
import Error from "./Pages/Error/Error";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/About Us/AboutUs";
import Login from "./Pages/Login/Login";
import Inscription from "./Pages/Inscription/Inscription";
import InscriptionAdmin from "./Pages/Inscription/InscriptionAdmin";



import Profile from "./Pages/Profile/Profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current } from "./JS/Actions/user";
import ScrollTop from "./Components/ScrollTop/ScrollTop";
import { currentAdmin } from "./JS/Actions/admin";
import UserList from "./Pages/UserList/UserList";
import EditProfile from "./Components/EdiPorfile/EditProfile";
import EditPassword from "./Components/EdiPorfile/EditPassword";
import Notification from "./Components/Notification/Notification";
import SucessNotification from "./Components/Notification/SucessNotification";
import AddProduct from "./Pages/Addproduct/AddProduct";
import Description from "./Pages/Descriptionproduit/Description";
import Messages from "./Pages/Messages/Messages";
import AddOrder from "./Pages/AddOrder/AddOrder";
import Order from "./Pages/Order/Order";
import ScrollTopRouter from "./Components/ScrollTopRouter/ScrollTopRouter";

function App() {
  const errors = useSelector((state) => state.userReducer.errors);
  const errorsA = useSelector((state) => state.adminReducer.errors);

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const success = useSelector((state) => state.userReducer.success);
  const successA = useSelector((state) => state.adminReducer.success);

  const productsuccess = useSelector((state) => state.productReducer.success);
  const messagesuccess = useSelector((state) => state.messageReducer.success);
  const ordersuccess = useSelector((state) => state.orderReducer.success);
  const errorsOrder = useSelector((state) => state.orderReducer.errors);
  const listproducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const [inputSearch, setInputSearch] = useState("");
  const filtredProducts = listproducts.filter((product) =>
    product.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>OUR PRODUCTS</title>
        <link rel="canonical" />
      </Helmet>

      {errors && errors.map((el) => <Notification error={el} />)}
      {errorsA && errorsA.map((el) => <Notification error={el} />)}


      {errorsOrder && errorsOrder.map((el) => <Notification error={el} />)}

      {messagesuccess &&
        messagesuccess.map((el) => <SucessNotification success={el} />)}

      {success && success.map((el) => <SucessNotification success={el} />)}
      {successA && successA.map((el) => <SucessNotification success={el} />)}

      {productsuccess &&
        productsuccess.map((el) => <SucessNotification success={el} />)}

      {ordersuccess &&
        ordersuccess.map((el) => <SucessNotification success={el} />)}
        <ScrollTopRouter/>

      <div className="v7">
        <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch} />
      </div>

      <div className="scrollbtn">
        <ScrollTop />
      </div>

      <div className="v8">
        <Routes>
          <Route exact path="/" element={<Home filtredProducts={filtredProducts}  />} />
          <Route path="/Produits" element={<Products filtredProducts={filtredProducts} />} />
          <Route path="/Aproposdenous" element={<AboutUs />} />
          <Route path="/*" element={<Error />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/accountCreate" element={<Inscription />} />
          <Route path="/Admin" element={<InscriptionAdmin />} />

          <Route path="/login" element={<Login />} />


          {isAuth ? (
            <Route path="/edit/:id" element={<EditProfile />} />
          ) : (
            <Route path="/*" element={<Error />} />
          )}
          {isAuthAdmin ? (
            <Route path="/addproduct" element={<AddProduct />} />
          ) : null}

          {isAuthAdmin ? <Route path="/AllOrders" element={<Order />} /> : null}

          {isAuth ? (
            <Route path="/editPassword/:id" element={<EditPassword />} />
          ) : null}

          {isAuth ? (
            <Route path="/profile/:id" element={<Profile />} />
          ) : isAuthAdmin ? (
            <Route path="/profile/:id" element={<Profile />} />
          ) : (
            <Route exact path="/" element={<Home />} />
          )}

          {isAuthAdmin ? (
            <Route path="/messages" element={<Messages />} />
          ) : null}

          {isAuthAdmin ? <Route path="/users" element={<UserList />} /> : null}

          <Route path="/addorder/:id" element={<AddOrder />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
