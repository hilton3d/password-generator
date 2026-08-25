const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pword1 = document.getElementById("pword1");
let pword2 = document.getElementById("pword2");

function generate() {
  function passwordOne() {
    pword1.textContent = "";
    for (let i = 0; i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      // console.log(characters[randomIndex]);
      pword1.textContent += characters[randomIndex];
    }
    pword1.style.color = "#4adf86";
  }

  function passwordTwo() {
    pword2.textContent = "";
    for (let i = 0; i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      // console.log(characters[randomIndex]);
      pword2.textContent += characters[randomIndex];
    }
    pword2.style.color = "#4adf86";
  }

  passwordOne();
  passwordTwo();
}
