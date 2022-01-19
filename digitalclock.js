

function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	let am_pm ;

	
    hour = hour % 12;

    hour = hour ? hour : 12;
	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
    am_pm = hour >= 12 ? 'PM' : 'AM';

   
    document.getElementById("hours").innerHTML=`${hour} <br> hours`
    document.getElementById("mins").innerHTML=`${min} <br> mins`
    document.getElementById("secs").innerHTML=`${sec} <br> secs`
    document.getElementById("am").innerHTML=am_pm

  
}
showTime();
setInterval(showTime, 1000);


function newblock1(){

    let a=document.createElement("div")
    a.className="time_table"
    a.setAttribute("id","add")

    let parent=document.getElementById("dynamic")
     parent.appendChild(a)

     let invalue=document.getElementById("wake_up_time");
     let value=invalue.options[invalue.selectedIndex].text

    //  document.getElementById("add ").innerHTML=  "WAKE UP TIME : "+value 

        
     let invalue2=document.getElementById("lunch_time");
     let value2=invalue2.options[invalue2.selectedIndex].text

     let invalue3=document.getElementById("nap_time");
     let value3=invalue3.options[invalue3.selectedIndex].text

     document.getElementById("add").innerHTML=` WAKE TIME : ${value} <br><br> LUNCH TIME : ${value2} <br><br> NAP TIME : ${value3}`

}   


function settime(){
       
    var i=document.getElementById("wake_up_time").value

    var j=document.getElementById("lunch_time").value

    var k=document.getElementById("nap_time").value
    let time=new Date().getHours();

    if(i==time){
        document.getElementById("image").style.backgroundImage="url(./wakeup_image.svg)";
        document.getElementById("newcomment").innerHTML="Lets have some breakfast"
    }
    else if(j==time){
        document.getElementById("image").style.backgroundImage="url(./lunch_image.svg)";
        document.getElementById("newcomment").innerHTML="Lets have some lunch"
    
    }
    else if(k==time){
        document.getElementById("image").style.backgroundImage="url(./goodnight_image.svg)";
        document.getElementById("newcomment").innerHTML="Lets sleep"
    
    }
    else{
        document.getElementById("image").style.backgroundImage="url(https://media.istockphoto.com/photos/happy-new-year-background-picture-id1344031966?b=1&k=20&m=1344031966&s=170667a&w=0&h=3Nyg-GF2adPyWO53B5-S_CfOG4g_f-pstoNi-eWv-Zk=)";
    }
    

    newblock1();

}

