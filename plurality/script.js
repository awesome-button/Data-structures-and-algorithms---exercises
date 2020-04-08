function plurality(numVoters, ...candidates) {
    let votes = {};
    let names = candidates.join(`\n`);
    for (let i = 0; i < numVoters; i++) {
        vote();
    }
    printWinner();

    function vote() {
        let choice = window.prompt(`Who would you like to vote for? \n\nCandidates:\n\n${names}`);
        !candidates.includes(choice) ?
            (votes['Invalid vote'] === undefined ?
                votes['Invalid vote'] = 1 :
                votes['Invalid vote'] += 1) :
            (votes[choice] === undefined ?
                votes[choice] = 1 :
                votes[choice] += 1)
    }

    function printWinner() {
        let invalid = votes["Invalid vote"];

        let sorted = Object.keys(votes).sort((a, b) => votes[b] - votes[a]);
        sorted
                .splice(sorted.indexOf("Invalid vote"), 1)
                .filter(name => votes[name] === votes[sorted[0]]);
        let winners = sorted.join(", ");    
        window.alert(`${winners} won the elections with ${votes[sorted[0]]} out of ${numVoters} votes. \nThe number of invalid votes was ${invalid}.`);
    }
}

plurality(5, "kotik", "manamanaouhui", "medved");