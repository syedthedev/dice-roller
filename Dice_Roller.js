function rollDice() {
    const input = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < input; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice/${value}.png" alt="Dice ${value}" />`);
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join('');
}
