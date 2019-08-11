var wakeuptime = 6;
var noon = 12;
var lunchtime = 1;
var naptime = lunchtime+2;
var evetime = 18;



var displayTime = function()
{
    var time = document.getElementById("displayClock");

    var currTime = new Date();

    var hrs = currTime.getHours();
    var min = currTime.getMinutes();
    var sec = currTime.getSeconds();

    var ampm = "PM";
    if(hrs<=noon)
    ampm = "AM";
    if(hrs>noon)
    hrs = hrs-12;
    if(min <10)
    min = "0"+min;
    if(sec<10)
    sec = "0"+sec;

    var timeString = hrs+":"+min+":"+sec+" "+ampm;
    time.innerHTML = timeString;
}
// displayTime();
var changeImage = function()
{
    var time = new Date().getHours();
    var imageSrc = "jw.png";// you can use it to extract from locaal machinee or give proper url of the image here

    var imageTag = document.getElementById("timeImg");

    if(time == wakeuptime)
    {
        imageSrc = "wakeup.png";
    }
    else if(time  == lunchtime)
    {
        imageSrc = "lunch.png";
    }
    else if(time == naptime)
    {
        imageSrc = "nap.png";
    }
    else if(time < noon)
    {
        imageSrc = "mrng.png";
    }
    else if(time >= evetime)
    {
        imageSrc = "evng.png";
    }
    else
    {
        imageSrc = "aftr.png";
    }

    imageTag.setAttribute("src",imageSrc);

    displayTime();
}
changeImage();

setInterval(changeImage,1000);

function wakeUpFunction()
{
    var selectedTime = document.getElementById("wakeUpTime");
    wakeuptime = selectedTime.value;
    console.log(wakeuptime);

}

function lunchFunction()
{
    var selectedTime = document.getElementById("LunchTime");
    lunchtime = selectedTime.value;
    console.log(lunchtime);
}

function NapFunction()
{
    var selectedTime = document.getElementById("NapTime");
    naptime = selectedTime.value;
    console.log(naptime);
}