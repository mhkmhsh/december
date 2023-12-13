let adjective = prompt('provide an adjective')
let relationship = prompt('provide a relation (ex: mother, father, friend, girlfriend)')
let noun = prompt('provide a noun')
let verb = prompt('provide a verb')
let adverb = prompt('provide an adverb')
let place = promt('provide a place')
let main = prompt('Name our sweetmaker')
let activity = prompt('name an activity')

let story = ` One day a  ${adjective} sweetmaker decided he wanted to go to ${place}, he had always wanted a ${relationship}. this man was named ${main}, his trip to ${place} was going to do ${activity}
 ${noun}
 He loved to ${verb} every single day, he was very good at ${adverb}`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`