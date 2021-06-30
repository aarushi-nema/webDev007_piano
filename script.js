//the keys on the keyboard that can be played as the keys of the piano
const whiteKeys= ['z','x','c','v', 'b','n','m'];
const blackKeys=['s', 'd','g','h','j'];

const keys= document.querySelectorAll('.key');
const whiteKeysDOM = document.querySelectorAll('.key.white');
const blackKeysDOM= document.querySelectorAll('.key.black');

keys.forEach(key =>{
    key.addEventListener('click', () => playNote(key))
});

//function that looks for any keyboard key held down
document.addEventListener('keydown', e => {
    //if a key is bring held down continuously don't replay the sound repeatedly
    if(e.repeat){
        return;
    }
    //keyPressed: contains the value of the key pressed
    const keyPressed= e.key;
    //map the key pressed on the keyboard to the whiteKeys and blackKeps arrays
    const whiteKeyIndex= whiteKeys.indexOf(keyPressed);
    const blackKeyIndex= blackKeys.indexOf(keyPressed);

    //if -1 is returned then the index was not found
    if(whiteKeyIndex>-1){
        playNote(whiteKeysDOM[whiteKeyIndex])
    } else if (blackKeyIndex>-1){
        playNote(blackKeysDOM[blackKeyIndex]);
    }
})

//function that plays the sound
function playNote(key){
    const noteAudio= document.getElementById(key.dataset.note);
    /*To restart the audio file when it is reclicked */
    noteAudio.currentTime= 0;
    noteAudio.play();
    //to show some visual effect on the keys that are pressed
    key.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    });
}