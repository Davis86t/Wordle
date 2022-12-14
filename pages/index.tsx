import { observer, useLocalObservable } from 'mobx-react-lite';
import { useEffect } from 'react';
import Guess from '../components/Guess';
import Qwerty from '../components/Qwerty';
import PuzzleStore from '../stores/PuzzleStore';

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)
  useEffect(() => {
    store.init()
    console.log(store.word)
    window.addEventListener('keyup', store.handleKeyup)

    return () => {
      window.removeEventListener('keyup', store.handleKeyup)
    }
  }, [])
  return (
  <div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-600'>
    <h1 className='text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-400'>
      Wordle
    </h1>
    {store.guesses.map((_, i) => (
      <Guess
        key={i}
        word={store.word}
        guess={store.guesses[i]}
        isGuessed={i < store.currentGuess}
      />
    ))}
    {store.won && <h1>You won!</h1>}
    {store.lost && <h1>You lost!</h1>}
    {(store.won || store.lost) && (
      <button onClick={store.init}>Play Again</button>
    )}
    <Qwerty store={store} />
  </div>
  )
})
