var wrapper = document.body.querySelector('.wrapper');
var dragonhealth=0
var fire= 3
var ice = 1 
var poison = 4 
var box= document.createElement("div")

 function totalhealth(number){
  if(number==1){
    dragonhealth=dragonhealth+fire-1 
  }else if(number==2){
    dragonhealth=dragonhealth+ice +1
  }else if(number==3){
    dragonhealth=dragonhealth+ poison 
  }
  box.innerHTML="Dragons Health:"+ dragonhealth;
  wrapper.appendChild(box);
  if(dragonhealth>=10){
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