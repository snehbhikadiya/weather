const getday=()=>
{
    let week=new Array(7);
    week[0]="sunday";
    week[1]="monday";
    week[2]="tuesday";
    week[3]="wed";
    week[4]="thusday";
    week[5]="friday";
    week[6]="saturday";
    let currenttime=new Date();
    let days=week[currenttime.getDay()];
    let  day=document.getElementById('day');
    day.innerHTML=days
}
getday();



const getdate=()=>
{
 
    let week=new Array(7)
    week[0]="sunday"
    week[1]="monday"
    week[2]="tuesday"
    week[3]="wednesday"
    week[4]="thusday"
    week[5]="friday"
    week[6]="saturday"
    let newdate=new Date();
    let convert=week[newdate.getDate()];
    let date=document.getElementById('today_date');
    date.innerHTML=convert

}

getdate();