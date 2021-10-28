import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
  const [countries, setCountires] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountires(data)
      })
  }, []) 

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }

  return (
    <div className="App">

      <h1>Loaded country : {countries.length}</h1>
      <h3>Country added : {cart.length}</h3>
      <Cart cart={cart}></Cart>

      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.numericCode}></Country>)
      }


    </div>
  );
}

export default App;
