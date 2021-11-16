function baitap2() {
    function getRandomInt(min, max) {
        let randomValue = Math.floor(Math.random() * (max - min));

        while (randomValue === 0) {
            randomValue = Math.floor(Math.random() * (max - min));
        }

        return min + randomValue;
    }

    for (let i = 0; i < 10; i++) {
        console.log(getRandomInt(1, 10));
    }
}

function baitap3() {
    let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    function getRandomInt(min, max) {
        let randomValue = Math.floor(Math.random() * (max - min));

        while (randomValue === 0) {
            randomValue = Math.floor(Math.random() * (max - min));
        }

        return min + randomValue;
    }

    function getRandomElement(array) {
        let randomElement = array[getRandomInt(0, array.length)];
        return randomElement;
    }

    for (let i = 0; i < 10; i++) {
        console.log(getRandomElement(randomArray));
    }
}

function baitap4() {
    var first = [7, 2, 5, 3, 5, 3];
    var second = [7, 2, 5, 4, 6, 3, 5, 3];

    var difference = second.filter(x => first.indexOf(x) === -1);
    console.log(difference);
}
