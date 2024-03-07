//left side elements selction

let bigImg = document.querySelector(".LImg")
let LeftCity = document.querySelector(".LCity")
let LeftCoun = document.querySelector(".LCoun")
let LeftTemp = document.querySelector(".LTemp")


//rightside elements slection

let inputData = document.getElementById("inputCity")
let icon = document.querySelector(".icons")
let main = document.querySelector(".main")
let cityName = document.querySelector(".cityName")
let country = document.querySelector(".country")
let temp = document.querySelector(".tempMet")
let humidity = document.querySelector(".humiMet")
let visibility = document.querySelector(".visiMet")
let wind = document.querySelector(".windMet")
let submitBtn = document.querySelector(".submit")



let Api_Key = 'ae2d571ddb49f582656927e34c7cf692'

async function weatherData(city){
  let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`)

  let data = await request.json()
  console.log(data);


     //work for 404 error

     if (data.cod == '404') {
      alert("404 error No City Found!");
    }


  //change all the by fetching their details from the api

   switch(data.weather[0].main){
    case 'Haze':
      icon.src = '/icons/haze.svg'
      break;
      case 'Clouds':
      icon.src = '/icons/cloud.svg'
      break;
      case 'Rain':
      icon.src = '/icons/rain.svg'
      break;
      case 'Clear':
      icon.src = '/icons/clear.svg'
      break;
      case 'Smoke':
      icon.src = '/icons/smog.svg'
      break;
   }

   //temp, humi, wind fetch form the api

   main.innerHTML = data.weather[0].main
   cityName.innerHTML = data.name
   country.innerHTML = data.sys.country
   temp.innerHTML = Math.round(data.main.temp - 273.15) + "℃"
   humidity.innerHTML = data.main.humidity + "%"
   visibility.innerHTML = data.visibility + " mi"
   wind.innerHTML = Math.round(data.wind.speed) + " KM/H"

   //left city element data change

   LeftCity.innerHTML = data.name
   LeftCoun.innerHTML = data.sys.country
   LeftTemp.innerHTML = Math.floor(data.main.temp - 273.15) + "℃"

   switch(data.weather[0].main){
    case 'Haze':
      bigImg.src = '/images/hazy.jpg'
      break;
      case 'Clouds':
      bigImg.src = '/images/cloudy.jpg'
      break;
      case 'Rain':
      bigImg.src = '/images/rainy.jpg'
      break;
      case 'Clear':
      bigImg.src = '/images/clear.jpg'
      break;
      case 'Smoke':
      bigImg.src = '/images/smokey.jpg'
      break;
   }
  
}
submitBtn.addEventListener("click", ()=>{
  weatherData(inputData.value)
})
