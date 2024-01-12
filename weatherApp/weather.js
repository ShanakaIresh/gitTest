const key = "pyBWs9zo9GmhP9eKMWX4GVeULKZx2lAF"

getcity = async (city) => {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
    const data = await fetch(url)
    const jData = await data.json()
    return jData
}
getWeather = async (cityKey) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}`
    const data = await fetch(url)
    const jData = await data.json()
    return jData
}
// getWeather(311399).then((data) => {
//     console.log(data[0].Temperature.Metric.Value)
//     console.log(data[0].WeatherText)

// })
// getcity('colombo').then((data) => {
//     console.log(data[0].Key)
//     console.log(data[0].LocalizedName)
// })