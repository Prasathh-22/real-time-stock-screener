// redeploy test
"use client";

import { useEffect, useState } from "react";

const initialStocks = [
  { symbol: "RELIANCE", price: 2450, change: 1.2 },
  { symbol: "TCS", price: 3900, change: -0.5 },
  { symbol: "INFY", price: 1520, change: 2.1 },
  { symbol: "HDFCBANK", price: 1680, change: 0.9 },
  { symbol: "ICICIBANK", price: 1120, change: -1.1 },
  { symbol: "SBIN", price: 820, change: 1.7 },
  { symbol: "WIPRO", price: 540, change: -0.8 },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [stocks, setStocks] = useState(initialStocks);

  const filteredStocks = stocks.filter((stock) =>
    stock.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prevStocks) =>
        prevStocks.map((stock) => ({
          ...stock,

          price: Number(
            (stock.price + (Math.random() * 20 - 10)).toFixed(2)
          ),

          change: Number(
            (Math.random() * 4 - 2).toFixed(2)
          ),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleWatchlist = (symbol: string) => {
    if (watchlist.includes(symbol)) {
      setWatchlist(watchlist.filter((item) => item !== symbol));
    } else {
      setWatchlist([...watchlist, symbol]);
    }
  };

  return (
    <main
      className={`min-h-screen flex ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Sidebar */}
      <div
        className={`w-64 min-h-screen p-6 hidden md:block ${
          darkMode ? "bg-zinc-900" : "bg-zinc-200"
        }`}
      >

        <h2 className="text-3xl font-bold mb-10 text-green-400">
          StockPro
        </h2>

        <ul className="space-y-6">

          <li className="hover:text-green-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Markets
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Watchlist
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Analytics
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Portfolio
          </li>

          <li className="hover:text-green-400 cursor-pointer">
            Settings
          </li>

        </ul>

      </div>

      {/* Main */}
      <div className="flex-1 p-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

          <div>
            <h1 className="text-5xl font-bold mb-2">
              Real Time Stock Screener
            </h1>

            <p className="text-zinc-400">
              Live Market Dashboard •{" "}
              {new Date().toLocaleTimeString()}
            </p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-zinc-700 px-4 py-2 rounded-lg"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg">
              Market Open
            </div>

          </div>

        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-zinc-900" : "bg-zinc-200"
            }`}
          >
            <h2 className="text-zinc-400">Total Stocks</h2>

            <p className="text-3xl font-bold mt-2">
              {stocks.length}
            </p>
          </div>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-zinc-900" : "bg-zinc-200"
            }`}
          >
            <h2 className="text-zinc-400">Watchlist</h2>

            <p className="text-3xl font-bold mt-2 text-yellow-400">
              {watchlist.length}
            </p>
          </div>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-zinc-900" : "bg-zinc-200"
            }`}
          >
            <h2 className="text-zinc-400">Portfolio Value</h2>

            <p className="text-3xl font-bold mt-2 text-green-400">
              ₹12,45,000
            </p>
          </div>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? "bg-zinc-900" : "bg-zinc-200"
            }`}
          >
            <h2 className="text-zinc-400">Profit / Loss</h2>

            <p className="text-3xl font-bold mt-2 text-green-400">
              +₹24,500
            </p>
          </div>

        </div>

        {/* Market Overview */}
        <div
          className={`p-6 rounded-2xl shadow-lg mb-8 ${
            darkMode ? "bg-zinc-900" : "bg-zinc-200"
          }`}
        >

          <h2 className="text-2xl font-bold mb-4">
            Market Overview
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-400">NIFTY 50</p>

              <h3 className="text-2xl font-bold text-green-400">
                24,850
              </h3>
            </div>

            <div className="bg-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-400">SENSEX</p>

              <h3 className="text-2xl font-bold text-green-400">
                81,200
              </h3>
            </div>

            <div className="bg-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-400">BANK NIFTY</p>

              <h3 className="text-2xl font-bold text-red-400">
                52,100
              </h3>
            </div>

            <div className="bg-zinc-800 p-4 rounded-xl">
              <p className="text-zinc-400">NASDAQ</p>

              <h3 className="text-2xl font-bold text-green-400">
                18,400
              </h3>
            </div>

          </div>

        </div>

        {/* Activity */}
        <div
          className={`p-6 rounded-2xl shadow-lg mb-8 ${
            darkMode ? "bg-zinc-900" : "bg-zinc-200"
          }`}
        >

          <h2 className="text-2xl font-bold mb-4">
            Recent Market Activity
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between bg-zinc-800 p-4 rounded-lg">
              <span>RELIANCE crossed ₹2450</span>

              <span className="text-green-400">
                +1.2%
              </span>
            </div>

            <div className="flex justify-between bg-zinc-800 p-4 rounded-lg">
              <span>TCS dropped below ₹3900</span>

              <span className="text-red-400">
                -0.5%
              </span>
            </div>

            <div className="flex justify-between bg-zinc-800 p-4 rounded-lg">
              <span>INFY reached new high</span>

              <span className="text-green-400">
                +2.1%
              </span>
            </div>

          </div>

        </div>

        {/* Stock Table */}
        <div
          className={`p-6 rounded-2xl shadow-lg ${
            darkMode ? "bg-zinc-900" : "bg-zinc-200"
          }`}
        >

          <input
            type="text"
            placeholder="Search Stock..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-lg bg-zinc-800 text-white outline-none mb-6"
          />

          <div className="overflow-x-auto">

            <table className="w-full border border-zinc-700">

              <thead>

                <tr className="bg-zinc-800">

                  <th className="p-4">Watchlist</th>

                  <th className="p-4">Symbol</th>

                  <th className="p-4">Price</th>

                  <th className="p-4">Change</th>

                  <th className="p-4">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredStocks.map((stock, index) => (

                  <tr
                    key={index}
                    className="text-center border-t border-zinc-700 hover:bg-zinc-800 transition"
                  >

                    <td className="p-4">

                      <button
                        onClick={() =>
                          toggleWatchlist(stock.symbol)
                        }
                        className="text-yellow-400 text-xl"
                      >
                        {watchlist.includes(stock.symbol)
                          ? "★"
                          : "☆"}
                      </button>

                    </td>

                    <td className="p-4">
                      {stock.symbol}
                    </td>

                    <td className="p-4">
                      ₹{stock.price}
                    </td>

                    <td
                      className={`p-4 ${
                        stock.change > 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {stock.change > 0 ? "⬆ +" : "⬇ "}
                      {stock.change}%
                    </td>

                    <td className="p-4 space-x-2">

                      <button
                        onClick={() =>
                          alert(`Bought ${stock.symbol}`)
                        }
                        className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
                      >
                        Buy
                      </button>

                      <button
                        onClick={() =>
                          alert(`Sold ${stock.symbol}`)
                        }
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                      >
                        Sell
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </main>
  );
}