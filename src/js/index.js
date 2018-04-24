import {cube} from './hoge.js';

function component() {
  let hoge = cube(15);
  $('#hoge').text(hoge);
  console.log(hoge);
}

window.hoge = function() {
  alert(123);
};

component();