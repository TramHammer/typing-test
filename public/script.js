const w = ["the", "of", "a", "to", "you", "was", "are", "they", "have", "one", "what", "were", "there", "your", "their", "said", "do", "many", "some", "would", "other", "into", "two", "could", "been", "who", "people", "only", " find", "water", "very", "words", "where", "most", "through", "any", "another", "come", "work", "word", "does", "put", "different", "again", "old", "great", "should", "Mr", "give", "something", "thought", "both", "often", "together", "don't", "world", "want"]
const s = ["The quick brown fox jumps over the lazy dog", ""]
let count = 30
let x = false

let orig = 0

function generateWords(type, list, words) {
    if (type == 0) {
        let genWords = ""
        for (let x = 0; x < words; x++) {
            let radWord = list[Math.floor(Math.random() * list.length) + 1]
            genWords = genWords + radWord + " "
        }
        return genWords
    } else if (type == 1) {
        let genNum = ""
        for (let y = 0; y < words; y++) {
            let radNum = Math.floor(Math.random() * 1000) + 1
            genNum = genNum + radNum + " "
        }
        return genNum
    } else if (type == 2) {
        let genSent = s[Math.floor(Math.random() * s.length) + 1]
        return genSent
    }
}

function typingtest(kys) {
    const bs = document.getElementById("inputText")
    if (kys == bs) {
        gfym(bs, brown)
    }
    
}
window.onload = function() { 
    document.getElementById("inputText").innerHTML = generateWords(0, w, 200)
}

document.getElementById("inputText").onkeyup = function() {
    document.getElementById("s-top").style.visibility = "hidden";
    document.getElementById("s-top").style.opacity = "0"
    if (x == false) {
        x = true;
        var counter = setInterval(timer, 1000); //1000 for ms
        async function timer() {
            if (count <= 0) {
              clearInterval(counter)
              document.getElementById("s-top").style.visibility = "visible"
              document.getElementById("s-top").style.opacity = "1"
              count = orig
              document.getElementById("time").innerHTML = orig
              return
            }
            count--
            document.getElementById("time").innerHTML = count

            document.getElementById("restart").addEventListener("click", (e) => {
                e.preventDefault()
                clearInterval(counter)
                document.getElementById("s-top").style.visibility = "visible"
                document.getElementById("s-top").style.opacity = "1"
            
            })
        }
    } 
    typingtest(this.value)
}

document.getElementById("sent").addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("inputText").innerHTML = generateWords(2, s, 1)
})

document.getElementById("word").addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("inputText").innerHTML = generateWords(0, w, 2000)
})

document.getElementById("num").addEventListener("click", (e) => {
    e.preventDefault()
    document.getElementById("inputText").innerHTML = generateWords(1, w, 2000)
})

document.getElementById("30").addEventListener("click", (e) =>{
    e.preventDefault()
    count = 30
    orig = 30
    document.getElementById("time").innerHTML = count
})

document.getElementById("60").addEventListener("click", (e) =>{
    e.preventDefault()
    count = 60
    orig = 60
    document.getElementById("time").innerHTML = count
})

document.getElementById("3600").addEventListener("click", (e) =>{
    e.preventDefault()
    count = 3600
    orig = 3600
    document.getElementById("time").innerHTML = count
})

document.getElementById("dark").addEventListener("click", (e) =>{
    e.preventDefault()

})