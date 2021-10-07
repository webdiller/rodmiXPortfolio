var pin_click = (e) => {
  // const childElements = Array.from(e.target.parentElement.children);
  e.target.parentElement.querySelectorAll(".active").forEach(el=>e.target !== el ? el.classList.remove('active'): "")
  // const filtered = [];
  // childElements.forEach((el) => {
  //   if (el !== e.target) filtered.push(el);
  // });
  // filtered.forEach(el=>el.classList.remove('active'))
  e.target.classList.toggle('active');
}

export function initPins(){
  // var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // console.log(w, !window["initPins"])
  const pins = document.querySelectorAll("[data-type='pin'][data-description]");
  pins.forEach((pin) => {
    pin.addEventListener('click', pin_click);
  });
  // window["initPins"] = true;
  // else if(w >= 1200 && window["initPins"]){
  //   const pins = document.querySelectorAll("[data-type='pin'][data-description]");
  //   pins.forEach((pin) => {
  //     pin.removeEventListener('click', pin_click);
  //   });
  //   window["initPins"] = false;
  // }

  // const pinChilds = document.querySelectorAll('[data-pins] [data-description]');
  // pinChilds.forEach((el) => {
  //   el.addEventListener('click', function (e) {
  //     e.target.classList.toggle('active');
  //   });
  // });
}