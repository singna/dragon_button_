var wrapper = document.body.querySelector('.wrapper');
var dragonhealth=10
var box= document.createElement("div")

 function totalhealth(number){
  if(number==1){
    dragonhealth=dragonhealth-2
  }else if(number==2){
    dragonhealth=dragonhealth-2
  }else if(number==3){
    dragonhealth=dragonhealth-4
  }
  box.innerHTML="Dragons Health:"+ dragonhealth;
  wrapper.appendChild(box);
  if(dragonhealth<=0){
  wrapper.innerHTML="Dragon has been Killed!"}
}

document.body.querySelector(".butt1").addEventListener("click", function(){
  totalhealth(1)
})
document.body.querySelector(".butt2").addEventListener("click", function(){
  totalhealth(2)
})
document.body.querySelector(".butt3").addEventListener("click", function(){
  totalhealth(3)
})