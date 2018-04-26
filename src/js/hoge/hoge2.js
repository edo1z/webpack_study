import {hoge as hoge3} from './hoge3.js';
import {cube} from '../hoge.js';
import StarImg from '../../img/common/star.png';
import Star2Img from '../../img/orange/star2.png';

function component() {
  let hoge_str = cube(320);
  $('#hoge').text(hoge_str);
  console.log(hoge_str);

  let star = new Image();
  star.src = StarImg;
  $('#star').append(star);

  let star2 = new Image();
  star2.src = Star2Img;
  $('#star2').append(star2);
}

window.hoge = function() {
  alert(hoge3(3));
};

component();