import words from '../words.json'

export default {
  word: '',
  guesses: [],
  currentGuess: 0,
  get won() {
    return this.guesses[this.currentGuess -1] === this.word
  },
  get lost() {
    return this.currentGuess === 6
  },
  init() {
    this.word = words[Math.round(Math.random() * words.length)]
    this.guesses.replace(new Array(6).fill(''))
    this.currentGuess = 0
  },
}