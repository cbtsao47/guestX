// Represent a 6 string guitar (standard tuning, only the first 2 fret boards) and a 4 string bass
// (standard tuning, only the first 3 frets) in a class structure. Create attributes, elements, functions
// and any other components you feel they may have.
// 1. Consider where they are similar and where they are different.
// 2. Consider we want to identify if the note from one is equal to the other based on the fret
// position and string played.

// Please note this doesn’t need to be an executable application , only a collection of classes that
// would represent the guitar , the bass in its commonality and its differences.

class Guitar {
  constructor(strings = ["E", "B", "G", "D", "A", "E"], fret = [0, 1, 2]) {
    this.strings = strings;
    this.fret = fret;
    this.notes = {
      0: this.strings,
      1: ["F", "C", "G#", "D#", "A#", "F"],
      2: ["F#", "C#", "A", "E", "B", "F#"]
    };
  }
  playNote(string, fret = 0) {
    //   if fret is not provided, defaults to 0 (open string)
    let stringIndex = string - 1;
    let isPartOfStrings = this.strings.length >= string;
    if (string && isPartOfStrings) {
      return `Note played: ${this.notes[fret][stringIndex]}`;
    }
    return `Please enter correct format! string(1-${
      this.strings.length
    }),[fret(0-2)] 0 means open string`;
  }
}
class Bass extends Guitar {
  constructor(strings = ["E", "A", "D", "G"], fret = [0, 1, 2, 3, 4]) {
    super(strings, fret);
    this.notes = {
      0: this.strings,
      1: ["F", "C", "G#", "D#", "A#", "F"],
      2: ["F#", "C#", "A", "E", "B", "F#"]
    };
  }
}

const bass = new Bass();
const guitar = new Guitar();
console.log(bass.playNote(2));
console.log(bass.playNote(9));
console.log(guitar.playNote(7));
console.log(guitar.playNote(6));
