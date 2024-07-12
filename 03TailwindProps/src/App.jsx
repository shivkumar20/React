import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let imgURL = "https://i.pinimg.com/564x/a5/a9/9f/a5a99f28f260f5ff9a4f45846fded85d.jpg"
  let lady = "https://i.pinimg.com/564x/b9/0d/d3/b90dd3199a4afef21e25b6a120e8887f.jpg"
  return (
    <>
      <h1 className='bg-green-300 text-black p-6 rounded-xl'>Tailwind CSS</h1>
              
      <Card username = "Shivkumar" btnText = "Shiv Profile" myimg = {imgURL}/>
      <Card username = "Shivani"  myimg={lady}/>

    </>
  )
}

export default App
