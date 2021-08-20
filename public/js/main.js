let submitBtn=document.getElementById("submitBtn");
let cityName=document.getElementById("cityName");
let city_name=document.getElementById("city_name");

let temp_real_val=document.getElementById("temp_real_val");
let temp_status=document.getElementById("temp_status");

let datahide=document.querySelector(".middle_layer")

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerHTML="Please Fill Out This Field";
        datahide.classList.add("data_hide");
    }else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=23561f8f1e6a511d39aa982c75e96ba4`;
            const responseUrl=await fetch(url);
            // console.log(responseUrl);
            const data=await responseUrl.json();
            const arrData=[data];
            const tempStatus=arrData[0].weather[0].main;
            // console.log(data.main.temp);
            city_name.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;

            if(tempStatus=="Sunny"){
                temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68'><span></span></i>";
            }else if(tempStatus=="Clouds"){
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6'><span></span></i>";   
            }else if(tempStatus=="Rainy"){
                temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be'><span></span></i>";   
            }else{
                temp_status.innerHTML="<i class='fas fa-cloud' style='color: #44c3de'><span></span></i>";   
            }
            datahide.classList.remove("data_hide");
        }catch{
            city_name.innerHTML="Pleae Enter the city name properly";
            datahide.classList.add("data_hide");
        }
    }
}

submitBtn.addEventListener('click',getInfo);
