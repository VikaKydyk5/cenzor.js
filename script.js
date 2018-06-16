let addWord = document.getElementById("add");
let	submit = document.getElementById("submit");
let word = document.getElementById("word");
let text = document.getElementById("text");
let p = document.querySelector("p");
addWord.onclick = () => p.innerText += " " + word.value;
submit.onclick = () => {
let arr = p.innerText.split(" ");
  arr.forEach(el => {
let match = text.value.match(el);
    if(match) text.value = text.value.replace(match[0], () => {
    	let str = [];
      for(let i = 0; i < match[0].length; i++){
      	str.push("*");
      }
      return str.join("");
    })
  })
};