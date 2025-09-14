let city=document.getElementById('city');
let temp = document.getElementById('temp');
let description = document.getElementById('description');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let weatherForm = document.getElementById('weatherForm');
let valueSearch = document.getElementById('valueSearch');
let main=document.querySelector('main');
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (valueSearch.value !== '') {
        searchWeather();
    }
});
 let id='c24db0ed8fd2ec2052e8e0098719f8dd';
 let url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+id;
const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
        .then(responsive => responsive.json())
        .then(data => {
            console.log(data);
            if(data.cod==200){
                city.querySelector('figcaption').innerText=data.name;
                city.querySelector('img').src='https://flagsapi.com/'+data.sys.country+'/shiny/32.png';
                temp.querySelector('img').src='http://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
                temp.querySelector('figcaption span').innerText = Math.round(data.main.temp);
                description.innerText = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
                
                clouds.innerText=data.clouds.all;
                humidity.innerText=data.main.humidity;
                pressure.innerText=data.main.pressure;
              
            }
            else{
                main.classList.add('error');
                setTimeout(() =>{
                    main.classList.remove('error');
                },1000);
            }
            valueSearch.value='';
        })
};
const initApp=() =>{
    valueSearch.value='Delhi';
    searchWeather();
}
initApp();