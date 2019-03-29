const caption = 'Welcome Ironhack0rs'

const characters = caption.split('')

const charInterval = setInterval(() => {
    const nextChar = characters.shift()
    document.querySelector('.intro-text').innerHTML += nextChar
    if (characters.length === 0) clearInterval(charInterval)
}, 500)

function getRandomChar() {
    const randChar = Math.floor(Math.random() * 36).toString(36)
    if (Math.random() < 0.5) {
        return randChar.toUpperCase()
    } else {
        return randChar.toLowerCase()
    }
}

// setInterval(() => {
//     document.querySelector('.intro-text').innerHTML = caption
// }, 500)
