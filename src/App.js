import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => { 
      setCoins(res.data);
    }).catch((err) => alert(err))
  }, [])

  return (
    <div className='app'>
      <div className='search'>
        <h1>Busca una coin</h1>
        <form>
          <input type="text" placeholder='Buscar' className='coinInput'></input>
        </form>
      </div>      
    </div>
  );
}

export default App;
