function rollDice() {
    var header = document.getElementsByClassName("header")[0];
    header.innerHTML = "Rolling... 🎲";

    var dice1 = document.getElementsByClassName("img1")[0];
    var dice2 = document.getElementsByClassName("img2")[0];

    dice1.classList.add("rolling");
    dice2.classList.add("rolling");

    setTimeout(() => {
        var randomValue1 = Math.floor(Math.random() * 6) + 1;
        var randomValue2 = Math.floor(Math.random() * 6) + 1;

        var randomImg1 = "./images/dice" + randomValue1 + ".png";
        var randomImg2 = "./images/dice" + randomValue2 + ".png";

        dice1.setAttribute("src", randomImg1);
        dice2.setAttribute("src", randomImg2);

        dice1.classList.remove("rolling");
        dice2.classList.remove("rolling");

        if (randomValue1 > randomValue2) {
            header.innerHTML = "🥇 Player 1 wins!";
        } else if (randomValue1 < randomValue2) {
            header.innerHTML = "🥇 Player 2 wins!";
        } else {
            header.innerHTML = "🤝 It's a draw!";
        }
    }, 500);
}
