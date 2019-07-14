export function moreThanVowelCount(word,vowelCount){
    let counter =0;
    let vowels='aeiouAEIOU'
    for(let letter of word){
        if (vowels.includes(letter)){
            counter++
        }
    }
    return counter>=vowelCount
}