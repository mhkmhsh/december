let adjective = prompt('provide an adjective')
let noun = prompt('provide an noun')
let verb = prompt('provide an verb')
let adverb = prompt('provide an adverb')

let story = ` Once upon a time there was a ${adjective} prince, he had a ${noun}. He loved to ${verb} every single day, he was very good at ${adverb}`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`