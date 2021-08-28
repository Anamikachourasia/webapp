const subtn= document.getElementById('subtn');
const cityName=document.getElementById('cityName');
const city_name= document.getElementById('city_name');
const temp= document.getElementById('temp_real');
const temp_status= document.getElementById('temp_status');
const datahide= document.querySelector('.middle_layer')
const getInfo=async(event)=>{
event.preventDefault();
let cityval=cityName.value;
if(cityval==='')
{
    city_name.innerText="Please write the name before search";
    datahide.classList.add('data_hide');
}
else{
    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=552560c6ba79d52f7a6096adf717fbdf`
        const respons=await fetch(url);
       console.log(respons);
        const dat= await respons.json();
        //console.log(dat)
        // const arr=[1,2,3];
        // console.log(arr[0]);
        const arrData= [dat];
        // console.log(arrData[0])
        // console.log(arrData[0].name);
        // console.log(arrData[0].sys.country);
        city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}C`;
        temp.innerHTML= arrData[0].main.temp ;
        const tempMood= arrData[0].weather[0].main;
        if(tempMood=="Clear"||tempMood=='clear')
        {
            temp_status.innerHTML="<i class='fa fa-sun-o' aria-hidden='true' style ='color:#eccc68'></i>"
        }
        else if (tempMood=='Clouds'||tempMood=='clouds')
        {
            temp_status.innerHTML="<i class='fa fa-cloud' aria-hidden='true' style ='color:#f1f2f6'></i>"
        }
        else if (tempMood=='Rain'||tempMood=='rain')
        {
            temp_status.innerHTML="<i class='fa fa-bolt' aria-hidden='true' style ='color:#a4b0be'></i>"
        }
        else
        {
            temp_status.innerHTML="<i class='fa fa-sun-o' aria-hidden='true' style ='color:yellow'></i>"
        }
        datahide.classList.remove('data_hide');

    }
    catch{
        city_name.innerText="Please Enter the City Name Properly";
        datahide.classList.add('data_hide');
    }

}

}
subtn.addEventListener('click',getInfo);
