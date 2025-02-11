/** Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/

function high(x) {
    const words = x.split(" ");
    const wordScore = word =>[...word].reduce((score, char) => score + char.charCodeAt(0) - 96, 0);

    let highScore = 0;
    let winningWord = "";

    words.forEach(word => {
        const score = wordScore(word);

        if (score > highScore) {
            highScore = score;
            winningWord = word;
        }
    });

    return winningWord;
}

//v2
function high(x) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


    const words = x.split(" ");
    let highScore = 0;
    let winningWord = "";

    for (let word of words){
        let wordScore = 0;

        for (let letter of word){
            wordScore += alphabet.indexOf(letter) +1;
        }

    if (wordScore > highScore){
        highScore = wordScore;
        winningWord = word;
    }
}
    return winningWord
}

