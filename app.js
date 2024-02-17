const date=document.querySelector(".date");
const day=document.querySelector(".day");
const month=document.querySelector(".month");
const year=document.querySelector(".year");

const today=new Date();
console.log(today);
const weekDay=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];
date.innerHTML=(today.getDate()<10?"0":"")+today.getDate();
day.innerHTML=weekDay[today.getDay()];
month.innerHTML=Months[today.getMonth()];
year.innerHTML=today.getFullYear();

