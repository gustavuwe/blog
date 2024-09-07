// let value = "ba"

// const posts = ["Escola", "Teste", "Casa", "Apartamento", "Livro", "Roda", "alamaba", "ekisdba"]

// const postTitle = "A vila gaúcha"

// const filteredPosts = posts.filter(post => post.toLowerCase().includes(value.toLowerCase()))

// console.log(postTitle.toLowerCase().split(" "))

// console.log(filteredPosts)

let arrayWords = ["bau", "escola", "taco", "teste", "academia", "abacate"]

let arrayPalavras = ["Piscina", "bola", "tenis", "academia"]

    for (let j = 0; j < arrayPalavras.length; j++) {
        if (arrayWords.includes(arrayPalavras[j])) {
            console.log(arrayPalavras[j])
        }
    }

let palavra = "abacat"

if (arrayWords.includes(palavra)) {
    console.log("possui")
}