// // Your Code Here+
// let firstAnswer  = window.prompt('Do you head left or right?')
// if(firstAnswer === 'left'){
//     let secondAnswer = window.prompt(`You come across a stray cat. 
// It scampers off down a small hole, just large enough for you to crawl through. 
// Do you follow it, or continue on your path?`)
//     if (secondAnswer === 'follow it') {
//         let secondAnswer = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
//         if(secondAnswer === 'stay') {
//             let secondAnswer = window.prompt('You live happily amongs the cats for the rest of your days.')
//         } else if (secondAnswer === 'spread the word') {
//             let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
//         }

//     }
// } else if(firstAnswer === 'right') {
//     let secondAnswer = window.prompt(`You come across a snoring dragon. 
// On the other side of him, you see a shiny chest of treasure. Another path would 
// lead you away from the dragon altogether. Which path do you take?`)

// }
// -----------------------

let firstAnswer = window.prompt(`A zombie apocalypse has arrived. 
Zombies are milling around outside of your house. 
Do you stay 'in' or venture 'out?'`)
if(firstAnswer === 'in'){
    let secondAnswer = window.prompt(`You stay inside and try to ignore your problems. 
    You manage to survive on your food for a whole month, but you have finally ran out. 
    Do you stay 'inside' or attempt to 'leave' and find more food?`)
    if(secondAnswer === 'inside'){
        window.alert(`You starve to death and become a zombie.`)
    } else if(secondAnswer === 'leave'){
        window.alert(`Your whole neighborhood has become zombies.
        They swarm and kill you. You're a zombie now.`)
    }

} else if(firstAnswer === 'out') {
    let secondAnswer = window.prompt(`Zombies attack you. Do you "run" or "fight?'`)
    if(secondAnswer === 'run'){
        window.alert(`You trip in your mad dash to escape and break your neck.
        You die.`)
    }else if(secondAnswer === 'fight'){
        window.alert(`There are too many zombies. You can't fight them all.
        You die.`)
    }
}