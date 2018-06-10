import {cube} from './hoge.js';
import StarImg from '../img/common/star.png';
import '../css/style.css';
import '../scss/common.scss';

function component() {
  let el = document.createElement('div');
  let btn = document.createElement('button');
  let el2 = document.createElement('div');
  let star = new Image();

  el.innerHTML = 'hoge!';
  el.classList.add('primary');
  btn.innerHTML = 'click me!';
  btn.onclick = changeMsg;
  star.src = StarImg;

  el.appendChild(btn);
  el2.appendChild(star);
  el.appendChild(el2);
  return el;
}

function changeMsg() {
  console.log(cube(12));
}

document.body.appendChild(component());
