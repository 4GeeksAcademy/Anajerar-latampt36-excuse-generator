/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  randomExcuse();
};

function randomExcuse() {
  let generatedExcuse = "";
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

  for (let selector in excuse) {
    let randomNumber = Math.floor(Math.random() * excuse[selector].length);
    generatedExcuse += excuse[selector][randomNumber] + " ";
  }
  document.getElementById("JSExcuse").innerHTML = generatedExcuse;
}
