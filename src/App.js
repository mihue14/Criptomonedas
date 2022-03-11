import React, { useEffect, useState } from "react";
import "./styles/App.css";
import axios from "axios";
import Coins from "./components/Coins";

function App() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoin = coins.filter((c) => {
     return c.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coinApp">
      <div className="coinSearch">
        <h1>Busca una coin</h1>
        <form>
          <input
            type="text"
            placeholder="Buscar"
            className="coinInput"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      {filterCoin.map((c) => {
        return (
          <Coins key={c.id} name={c.name} img={c.image} symbol={c.symbol} marketcap={c.market_cap} price={c.current_price} priceChange={c.price_change_percentage_24h} volume={c.total_volume}/>
        );
      })}
    </div>
  );
}

export default App;
