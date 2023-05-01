const submitbtn=document.getElementById('submitbtn');
const getcity=document.getElementById('getCityname');
const output=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');
const temp_value=document.getElementById('temp_value');
const getinfo=async(event)=>
{
    event.preventDefault();
   let cityval=getcity.value
    if(cityval==="")
    {
        output.innerHTML="please write the name"
        datahide.classList.add('data_hide')
    }else
    {
        try {
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=4e41cd7244720dd978ac8e1ecd2d1ebf`
        const response= await fetch(url)
        const cov=await response.json()
        const arr=[cov]
        output.innerHTML=`${arr[0].name}`+` `+`${arr[0].sys.country}`
        temp_value.innerHTML=arr[0].main.temp
        const status=arr[0].weather[0].main
      
        if(status=="Haze")
        {
            temp_status.innerHTML=`<i class="fa-solid fa-cloud-sun" style='color:#05DFF7'></i>`
        }else if(status=="Clouds")
        {
            temp_status.innerHTML=`<i class="fa-brands fa-cloudflare" style='color:#05DFF7'></i>`
        } 
        else if(status=="Rain")
        {
            temp_status.innerHTML=`<i class="fa-solid fa-cloud-rain" style='color:#05DFF7'></i>`
        } 
        else if(status=="Clear")
        {
            temp_status.innerHTML=`<i class="fa-light fa-cloud-sun" style='color:#F0A15C'></i>`
        } 
        else
        { 
            temp_status.innerHTML=`<i class="fa-regular fa-sun" style='color:#FFAC03'></i>`
        }
        datahide.classList.remove('data_hide')

        } catch (error) {
            output.innerHTML="please enter valid city"
            datahide.classList.add('data_hide')
        }

    }
}
submitbtn.addEventListener('click',getinfo)
