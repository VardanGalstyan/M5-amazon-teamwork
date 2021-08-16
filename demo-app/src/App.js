import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarTop from './components/NavbarTop'
import ListedItems from './components/ListedItems';
import { useState, useEffect } from 'react';
import './App.css';



function App() {

  const [products, setProducts] = useState(null)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {

      const response = await fetch('http://localhost:3030/products')
      const data = await response.json()
      if(data){
        setProducts(data)
        console.log('this is my data', data);
      }

    } catch (error) {
      
    }

  }

  return (
    <div className="App">
      <NavbarTop  />
      <ListedItems products =  {...products} />
    </div>
  );
}

export default App;
