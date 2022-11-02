export default function Qwerty() {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return (
    <div>
      {qwerty.map((row) => (
        <div className='flex justify-center'>
          {row.split('').map((key) => (
            <div className='m-px flex h-10 w-10 items-center justify-center rounded-md bg-gray-400 uppercase'>{key}</div>
          ))}
        </div>
      ))}
    </div>
  )
}