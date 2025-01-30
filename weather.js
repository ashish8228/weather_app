document.getElementById('sear').addEventListener('click',()=>{
    const city = document.getElementById('inp').value;

    function update (data){
        const deg = document.getElementById('degree');
        const wind = document.getElementById('wind');
        const sahar = document.getElementById('city');
        const city = document.getElementById('inp').value;
        const hum = document.getElementById('hum')
        deg.innerHTML = `Temperature: ${data.current.temp_c}ºC`;
        hum.innerHTML = `Humidity: ${data.current.humidity}ºC`;
        wind.innerHTML = `Wind Speed: ${data.current.wind_kph}kph`;
        sahar.innerHTML = `City name: ${city}`;
    }



    const pro = fetch(`http://api.weatherapi.com/v1/current.json?key=7606fc818fc24e5e9d290158253001&q=${city}&aqi=yes`)

    pro
    .then(respone =>respone.json())
    .then(data => update(data))
})
