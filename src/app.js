/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let genExcuse = "";
  const excuse = {
    who: ["The dog", "My grandma", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  };

  for (let X in excuse)
    genExcuse += excuse[X][Math.floor(Math.random() * excuse[X].length)] + " ";

  document.getElementById("JSExcuse").innerHTML = genExcuse;
};
