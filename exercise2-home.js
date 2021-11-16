function getRandomInt(min, max) {
    let randomValue = Math.floor(Math.random() * (max - min));

    while (randomValue === 0)
    {
        randomValue = Math.floor(Math.random() * (max - min));
    }

    return min + randomValue;
}
