let adjective = prompt('provide an adjective')
let relationship = prompt('provide a relation (ex: mother, father, friend, girlfriend)')
let noun = prompt('provide a noun')
let verb = prompt('provide a verb')
let adverb = prompt('provide an adverb')
let place = prompt('provide a place')
let main = prompt('Name our sweetmaker')
let activity = prompt('name an activity')
let girl = prompt('name a girl')
let end = prompt('name a number')

let story = ` One day a  ${adjective} snowman went to the ${place}, he had always wanted a ${relationship}. this man was named ${main}, his trip to ${place} was going to do ${activity} He loved to ${verb} every single day, he was very good at ${adverb}. The ${noun} was upset that he wanted to go on this trip but he went anyways. On this trip he met ${girl} , she was also a snowman. together they had ${end} babies. `

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`