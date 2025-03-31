import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Title from "./components/Title"
import Image from "./components/Image"

function App() {
  const users = [
    {
      id: 1,
      name: "Jerome",
      picture: "https://randomuser.me/api/portraits/men/37.jpg"
    },
    {
      id: 2,
      name: "Max",
      picture: "https://randomuser.me/api/portraits/men/38.jpg"
    },
    {
      id: 3,
      name: "Karl",
      picture: "https://randomuser.me/api/portraits/men/39.jpg"
    },
    {
      id: 4,
      name: "Tim",
      picture: "https://randomuser.me/api/portraits/men/40.jpg"
    }
  ]

  return (
    <>
      {
        users.map(user => (
          <div key={user.id}>
            <Image imgSrc={user.name} imgSrc={user.picture} />
            <Title name={user.name} />
          </div>
        ))
      }
    </>
  )
}

export default App
