var navEle= document.createElement("nav");
var conEle= document.createElement("div");
var titleEle =document.createElement("h1");
var nameEle =document.createElement("h3");
var countEle=document.createElement("div");
var countbutton=document.createElement("button");

navEle.classList.add("nav");
var counts = 0;

countbutton.innerHTML = "Counting Up";
countEle.innetHTML = "Counter: " +counts;

countbutton.addEventListener("click", function(){
  count= count +1;
  countEle.innerHTML= "Counter: " +counts;
});

contentEle.appendChild(titleEle);
contentEle.appendChild(nameEle);
contentEle.appendChild(countbutton);
contentEle.appendChild(countEle);
document.body.appendChild(navEle);
document.body.appendChild(conEle);

function menu(){
var pages =  ["Home", "About", "Interact"];
  nav(pages);
  renderPage("Home");
}

function nav(pages){
for(var i=0; i<pages.length; i++){
  const pgButton = document.createElement("button");
  const navTitle = pages[i];
  pgButton.innerHTML = navTitle;
  pgButton.addEventListener("click",function(){
    renderpage(navTitle);
  });
  navEle.appendChild(pgButton);
}
  
function renderPage(pg){
  if(pg=="Home"){
    hm();
  }else if(pg=="About"){
    ab();
  }else if (pg=="Interact"){
    it();
  }
}

  function hm(){
    titleEle.innerHTML= "Home";
    nameEle.innerHTML= "";
    countEle.innerHTML="";
    countbutton.style.visibilty="hidden";
  }
  
  function ab(){
    titleEle.innerHTML= "About";
    nameEle.innerHTML= "Sydney Seibers";
    countEle.innerHTML="";
    countbutton.style.visibilty="hidden";
  }
  
  function it(){
    titleEle.innerHTML= "Interact";
    nameEle.innerHTML= "";
    countEle.innerHTML="Counter: "+ count;
    countbutton.style.visibilty="visible";
  }
  menu();