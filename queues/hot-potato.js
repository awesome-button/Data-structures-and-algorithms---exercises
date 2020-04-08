//hot potato game

function play(names) {
    
    while (names.length > 1) {
        let random = rand();
        for (let i = 0; i < random; i++) {
            let firstInQ = names[names.length-1];
            names.pop(firstInQ);
            names.unshift(firstInQ);
        }
        names.pop(names[names.length - 1]);
    }
    console.log(names[0]);
}

function rand() {
    return Math.floor(Math.random() * 5);
}

play(["medved", "Ellis", "kotik", "Emilka"], 3);