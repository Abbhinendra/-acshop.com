function fun(){
let user=document.getElementById('user');
let phone=document.getElementById('number');
let email=document.getElementById('email');
let desc=document.getElementById('desc');
let btn=document.getElementById('btn');
let flag=1;
if(user.value.trim()=="" ||phone.value.trim()=="" || email.value.trim()==""){
    alert("these fields are required");
    flag=0;
}else{
flag=1;
if(user.value.trim().length<3){
alert("Customer name required minmum 3 character");
flag=0;
}
else{
    flag=1;
}
if(phone.value.trim().length<10){
    alert("Phone number are required only 10 digits");
    flag=0;
}
else if(phone.value.trim().length>10){
    alert("Phone number are required only 10 digits");
    flag=0;
}
else{
    flag=1;
}
}



if(flag){
    return true;
}
else{
    return false;
}
}

let year=document.getElementById('year');
let d= new Date();
year.innerHTML=d.getFullYear();
let cross=document.querySelector('#cross img');
let contact=document.getElementById('contact');
let contactMaps=document.querySelector('.contact-maps');

contact.addEventListener('click',function(){
    contactMaps.style.top="50%";
});

cross.addEventListener('click',function(){
    contactMaps.style.top="-50%";
});