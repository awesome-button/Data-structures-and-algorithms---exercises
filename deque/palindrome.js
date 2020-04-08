let Deque = require('./deque.js');

function palindrome(string) {
    let deque = new Deque();
    for (let i = 0; i < string.length; i++) {
        deque.addFront(string[i]);
    }

    let stillEqual = true;

    while (deque.size() > 1 && stillEqual) {
        let first = deque.removeFront();
        let last = deque.removeRear();
        if (first !== last) stillEqual = false;
    }
    return stillEqual;
}

console.log(palindrome("caac"));
