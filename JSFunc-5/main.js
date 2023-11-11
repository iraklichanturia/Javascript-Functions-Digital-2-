//Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადაეცემა რენდომული ფერებისგან შედგენილი მასივი და
//ეს ფუნქცია დაბეჭდავს კონსოლში თითოეულ ფერს და გაუფერადებს დაბეჭდილ ტექს background -ს იმ ფერით რა ფერსაც ბეჭდავს

function randomColor() {
  let arr = [];
  for (let i = 0; i < 1; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    arr.push(`rgb(${r},${g},${b})`);
  }
  return arr;
}

function printColoredText(text, color) {
    console.log(`%c${text}`, ` background-color: ${color}`);
    }

// let color = randomColor();
printColoredText("ეს ტექსტი გაფერადებულია რენდომ ფერში!", randomColor());