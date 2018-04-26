import {cube} from './hoge.js';
import StarImg from '../img/common/star.png';

function component() {
  let hoge = cube(15);
  $('#hoge').text(hoge);
  console.log(hoge);
  let star = new Image();
  star.src = StarImg;
  $('#star').append(star);
}

window.hoge = function() {
  alert(123);
};

component();