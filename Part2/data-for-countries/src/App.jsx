import { useEffect, useState } from "react"
import DetailCountry from "./components/DetailCountry"
const apiKey = import.meta.env.VITE_WEATHER_API_KEY

const App = () => {

  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetch('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(resp => resp.json()).then(setCountries)
  }, [])

  const handleChangeFilter = e => {
    const text = e.target.value
    const filterCountries = text
      ? countries.filter(c => c.name.common.toUpperCase().includes(text.toUpperCase()))
      : []
    setCountriesToShow(filterCountries)
  }

  const handleOnClick = country => {
    setCountriesToShow([country])
  }

  useEffect(() => {
    if (countriesToShow.length === 1) {
      const city = countriesToShow[0].capital[0]
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(resp => resp.json())
      .then(setWeather)
    }
  }, [countriesToShow])

  return (
    <>
      <h2 style={{marginBottom: '0'}}>Countries</h2>
      <div>
        find countries <input onChange={handleChangeFilter} />
        {countriesToShow.length > 10
          ? <div>Too many matches, specify another filter</div>
          : countriesToShow.length === 1
            ? <DetailCountry country={countriesToShow[0]} weather={weather} />
            : <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              {countriesToShow.map(country => (
                <li key={country.cca3}>
                  {country.name.common} <button onClick={() => handleOnClick(country)}>show</button>
                </li>
              ))}
            </ul>
        }

      </div>
    </>
  )

}

export default App
