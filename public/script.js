const w = ["the", "of", "a", "to", "you", "was", "are", "they", "have", "one", "what", "were", "there", "your", "their", "said", "do", "many", "some", "would", "other", "into", "two", "could", "been", "who", "people", "only", " find", "water", "very", "words", "where", "most", "through", "any", "another", "come", "work", "word", "does", "put", "different", "again", "old", "great", "should", "Mr", "give", "something", "thought", "both", "often", "together", "don't", "world", "want"]
let count = 60
let x = false

function generateWords(type, list, words) {
    if (type == 0) {
        let genWords = ""
        for (let x = 0; x < words; x++) {
            let radWord = list[Math.floor(Math.random() * list.length) + 1]
            genWords = genWords + " " + radWord
        }
        return genWords
    } else if (type == 1) {
        let genNum = ""
        for (let y = 0; y < words; y++) {
            let radNum = Math.floor(Math.random() * 1000) + 1
            genNum = genNum + " " + radNum
        }
        return genNum
    }
}

window.onload = function() { 
    document.getElementById("inputText").innerHTML = generateWords(0, w, 200)
}

document.getElementById("inputText").onkeyup = function() {
    if (x == false) {
        x = true;
        var counter = setInterval(timer, 1000); //1000 will
    } 
}

async function timer() {
    if (count <= 0) {
      clearInterval(counter)
      return 
    }
    count--
    document.getElementById("time").innerHTML = count
}