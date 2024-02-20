const trainer1Dialogue = [
    "Trainer 1: Hey there, fellow Trainer!",
    "Trainer 1: I've been training my Pikachu for some tough battles!",
    "Trainer 1: Pikachu, use Thunderbolt!"
];

const trainer2Dialogue = [
    "Trainer 2: Hi Trainer 1!",
    "Trainer 2: My Bulbasaur is ready for any challenge!",
    "Trainer 2: Bulbasaur, use Vine Whip!"
];

let currentDialogueIndex1 = 0;
let currentDialogueIndex2 = 0;
const dialogueElement1 = document.getElementById('dialogue1');
const dialogueElement2 = document.getElementById('dialogue2');

function nextDialogue(trainer) {
    if (trainer === 1 && currentDialogueIndex1 < trainer1Dialogue.length) {
        dialogueElement1.innerHTML += `<p>${trainer1Dialogue[currentDialogueIndex1]}</p>`;
        currentDialogueIndex1++;
    } else if (trainer === 2 && currentDialogueIndex2 < trainer2Dialogue.length) {
        dialogueElement2.innerHTML += `<p>${trainer2Dialogue[currentDialogueIndex2]}</p>`;
        currentDialogueIndex2++;
    }
}
