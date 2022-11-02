import { observer, useLocalObservable } from 'mobx-react-lite';
import { useEffect } from 'react';
import Guess from '../components/Guess';
import Qwerty from '../components/Qwerty';
import PuzzleStore from '../stores/PuzzleStore';

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)
  useEffect(() => {
    store.init()
  }, [])
  return <div className='flex h-screen w-screen flex-col items-center justify-center bg-gray-600'>
    <h1 className='text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-purple-400'>
      Wordle
    </h1>
    {new Array(6).fill(0).map((_, i) => (
      <Guess
        key={i}
        word={store.word}
        guess={store.guesses[i]}
        isGuessed={i < store.currentGuess}
      />
    ))}
    <h1>won/lost</h1>
    <Qwerty />
  </div>
})
