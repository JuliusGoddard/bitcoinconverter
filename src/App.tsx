import {useState, useEffect} from 'react'
import axios from 'axios'


const App = () => {
  const [price, setPrice] = useState<any>();
  const options = ["ARS", "ARD", "BRL", "CAD", "CHF", "CLP", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HRK", "HUF", "INR", "ISK", "JPK", "KRW", "NZD", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "USD"]

const [selected, setSelected] = useState(options[0])
const [amount, setAmount] = useState('')
const [calculatedAmount, setCalculatedAmount] = useState<any>()

  useEffect(() => {
    axios.get('https://blockchain.info/ticker')
    .then(data => {
      setPrice(data)
    })
  }, [])

  const fetchData = () => {
    axios.get(`https://blockchain.info/tobtc?currency=${selected}&value=${amount}`)
    .then(data => {
      setCalculatedAmount(data.data)
      console.log(calculatedAmount)
    })
  }

  const handleSubmit = (e: any) => {
 e.preventDefault()
 fetchData()
console.log(calculatedAmount)
  }

  const handleAmountChange = (e: any) => {
e.preventDefault()
setAmount(e.target.value)
  }

  
if (!price || price === undefined ) {
  return null
}


  return (
 <div className="h-screen bg-gradient-to-b from-blue-800 to-blue-100">
  <div className="py-10">
  <h1 className="text-3xl text-center m-auto text-white font-bold">Current Prices</h1>
  </div>
  <div className="md:flex justify-around h-full">
    <div className="text-center text-2xl m-auto bg-gray-100 p-20 rounded-md shadow-2xl max-w-[75%]">
  <h2 className="text-3xl font-bold">(£) {price.data.GBP.symbol}</h2>
 {price.data.GBP.last} BTC
 </div>
 <div className="text-center text-2xl m-auto bg-gray-100 p-20 rounded-md shadow-2xl max-w-[75%]">
  <h2 className="text-3xl font-bold">(€) {price.data.EUR.symbol}</h2>
 {price.data.EUR.last} BTC
 </div>
 <div className="text-center text-2xl m-auto bg-gray-100 p-20 rounded-md shadow-2xl max-w-[75%]">
  <h2 className="text-3xl font-bold">($) {price.data.USD.symbol}</h2>
 {price.data.USD.last} BTC
 </div>
 </div>
 <div className="h-screen flex ">
  <div className="m-auto bg-blue-300 p-20 rounded-md shadow-2xl">
  <p className="text-3xl font-bold py-10">Convert Currency into BTC</p>
  <p className="text-xl"> Select a currency: <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        id='currency'
       value={selected} 
       onChange={(e) => setSelected(e.target.value)}>
         {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
         ))}
      </select></p>
      <form onSubmit={handleSubmit}>
  <p className="py-10 text-xl">Enter value: <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="amount" placeholder="Enter value in selected currency" value={amount} onChange={handleAmountChange}></input></p>
  <p className="text-center"><button className="p-5 mb-2 mr-2 overflow-hidden text-2xl text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-black font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" id="convert-button" type="submit">Calculate!</button></p>
  <p id="#calculatedamount" className="text-xl py-8 bg-gray-100 px-2 font-bold rounded-md">Value: {calculatedAmount} BTC</p>
  </form>
 </div>
 </div>
 <div className="h-screen flex">
  <div className="m-auto w-full h-full">
    <p className="text-center text-2xl py-10">More Statistics</p>
    <p className="text-center text-md py-5">BTC/USD Historical Chart</p>
  <iframe className="w-full h-3/6" title="graph1" src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"></iframe>
  <p className="text-center text-md py-5">Top Coins</p>
  <iframe className="w-full h-96" title="graph2" src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"></iframe>
  </div>
 </div>
 
 <div className="text-right fixed bottom-0 w-full">
  <iframe className="w-full max-h-10" title="graph3" src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="></iframe>
  <p className="bg-white text-md text-blue-800 font-bold p-2">Created by Web For Professionals, Copyright 2023</p></div>
 </div>
  );
};

export default App;
