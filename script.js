
async function fetchData(ciudad) {
    try {
    //   const response = await fetch('https://api.example.com/data');
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=961ba900fa9486fe75a948a5579b0891`);
    
      const data = await response.json();
      return data;
    } catch (error) {
      throw 'Error al obtener los datos';
    }
  }
  async function displayData(ciudad) {
    try {
      const data = await fetchData(ciudad);
      const dataContainer = document.getElementById('data-container');
      visualizar(data)
      //dataContainer.innerText = JSON.stringify(data);
      console.log(JSON.stringify(data));
      console.log(data);


    } catch (error) {
      console.error(error);
    }
  }
//displayData("bogota");


  
//Elementos del DOM
const $selector = document.getElementById('selector');

const $icon = document.getElementById('icon')
const $coordenadas = document.getElementById('coordenadas');
const $temp = document.getElementById('temp');
const $pressure = document.getElementById('pressure');
const $humidity = document.getElementById('humidity');

//Funciones
$selector.addEventListener('change',(e) =>{
  //console.log("holaa")
  let ciudad = e.target.value;
  displayData(ciudad);
})
function visualizar(data){
  console.log(data.lenght);

  //ICON
  let img = `<img src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" ></img>`
  $icon.innerHTML = img;
  //Coordenadas
  let coord = `Latitud: ${data.coord.lat}
               Longitud: ${data.coord.lon}`;
  $coordenadas.innerHTML= coord;
 
  //Temperatura
  let dataTem = (data.main.temp-273.15).toFixed(1);
  let temp = `<p>${dataTem} ºC</p>`;
  $temp.innerHTML=temp;

  //Presión
  let pressure = `<p>${(data.main.pressure/1000).toFixed(2)} atm</p>`;
  $pressure.innerHTML=pressure;

  //Humedad
  let humidity = `<p>${data.main.humidity} %</p>`;
  $humidity.innerHTML=humidity;

} 