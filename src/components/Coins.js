import React from "react";
import '../styles/Coins.css';

const Coins = ({ name, img, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coin">
          <img src={img} alt="crypto" />
          <h1>{name}</h1>
          <p className="coinSymbol">{symbol}</p>
        </div>
        <div className="coinData">
          <p className="coinPrice">Precio: ${price}</p>
          <p className="coinVolume">Volumen: ${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coinPercentRed">Últimas 24hs: {priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coinPercentGreen">Últimas 24hs: {priceChange.toFixed(2)}%</p>
          )}
          <p className="coinMarketcap">
            Capitalización: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins;
