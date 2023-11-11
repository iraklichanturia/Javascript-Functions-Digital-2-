//Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადაეცემა რენდომული ფერების რაოდენობა და ეს ფუნქცია დააბრუნებს 
//რენდომულ ფერებს იმ რაოდენობის რამდენსაც მომხმარებელი გადმოსცემს, რენდომული რიცხვები იყოს მოცემული RGB ფორმატში


function getRandomColor(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        arr.push(`rgb(${r},${g},${b})`);
    }
    return arr;
}

console.log(getRandomColor(5));
