// start sldeder ----------------------------------
let list = document.querySelector(".slideshow .list");
let items = document.querySelectorAll(".slideshow .list .item");
let dost = document.querySelectorAll(".slideshow .dost li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
// console.log(items)
let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};

let refreschSlider = setInterval(() => {
  next.click();
}, 10000);
prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  reloadSlider();
};
function reloadSlider() {
  let checkleft = items[active].offsetLeft;
  list.style.left = -checkleft + "px";

  let lastActiveDot = document.querySelector(".slideshow .dost li.active");
  lastActiveDot.classList.remove("active");
  dost[active].classList.add("active");
  clearInterval(refreschSlider);
  refreschSlider = setInterval(() => {
    next.click();
  }, 10000);
}
dost.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
// End sldeder ---------------------------------
// Calculertor
const myBtn = document.getElementById("btn-submit");
myBtn.onclick = () => {
  let size = document.getElementById("size").value;
  let place = document.getElementById("place").value;
  size = Number(size);
  place = Number(place); 
 if(place >= 0){
  sum = size * place;
  document.getElementById('total').innerHTML ='ราคา: '+ sum +' บาท';
 }else{
  document.getElementById('total').innerHTML ='ค่าไม่ถูกต้อง';
 }   
//   return sum;
};
