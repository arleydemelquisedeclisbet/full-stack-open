
const DetailCountry = ({ country: { name, capital, area, languages, flag }, weather }) => {

    return (
        <section style={{display: 'flex', justifyContent: 'space-around', width: '50rem', background: '#b9b9b9 ', borderRadius: '50px', marginTop: '1em'}}>
            <div>
                <h1>{name.common}</h1>
                <div>Capital {capital[0]}</div>
                <div>Área {area}</div>

                <h3>Languages:</h3>
                <ul style={{marginBottom: '0'}}>
                    { Object.entries(languages).map(([key, value]) => <li key={key}>{value}</li>) }
                </ul>

            </div>
            <div style={{ fontSize: '15rem', padding: '0' }}>{flag}</div>
            {weather !== null && 
                <div>
                    <h1>Weather in {capital[0]}</h1>
                    <div>Temperature: {weather.main.temp} Celcius</div>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width="140" alt={`Img from ${capital[0]}`} />
                    <div>Wind {weather.wind.speed} m/s</div>
                </div>
            }
        </section>
    )
}

export default DetailCountry