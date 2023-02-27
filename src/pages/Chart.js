import React, { useEffect, useRef } from "react";

const Chart = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = `
      {
        "symbols": [
          {
            "description": "",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "",
            "proName": "BITGET:XRPUSDT.P"
          },
          {
            "description": "",
            "proName": "SKILLING:NASDAQ"
          },
          {
            "description": "",
            "proName": "TVC:GOLD"
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "en"
      }
      `;

      scriptRef.current = script;
      const containerRef = document.querySelector(
        ".tradingview-widget-container"
      );
      containerRef.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default Chart;
