import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import {Human, timeLeft } from '../src/planet.js';

// let human = new Human(20,78)
// let mercLE = human.mercuryLE();
// let mercAge = human.mercuryAge();
// let result = timeLeft(mercLE,mercAge);


$(document).ready(function() {
  console.log("help");
  $("button").click(function(e){
    e.preventDefault();
    $("p").text("hello");
  });
});

