import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar';
import Home from './Components/Home';
import ProductsList from './Components/Productlist';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <ProductsList/>
      <Routes>
      <Route
        path="/"
        element={
          <>
          <Home/>
         <ProductsList/>
          </>
        }
      />
     
      <Route path="Seebutton " element={<Allproducts/>} />
    </Routes>
    </div>
  );
}

export default App;
