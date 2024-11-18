/*When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.*/

function swap (string) {
    const vowels = 'aeiou';

    const words = string.split('').map(letter => {

        if (vowels.includes(letter.toLowerCase())){
            return letter.toUpperCase();
        }
        return letter;
    });

   return words.join('');
}
