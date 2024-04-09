
const DetailCountry = ({country: { name, capital, area, languages, flag }}) => {

    return (
        <>
            <h1>{name.common}</h1>
            <div>Capital {capital[0]}</div>
            <div>Área {area}</div>

            <h3>Languages:</h3>
            <ul style={{marginBottom: '0'}}>
                { Object.entries(languages).map(([key, value]) => <li key={key}>{value}</li>) }
            </ul>

            <div style={{ fontSize: '15rem' }}>{flag}</div>
        </>
    )
}

export default DetailCountry