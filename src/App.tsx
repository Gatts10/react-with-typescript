import React, { useState } from 'react'
import './app.css'
import AddToList from './components/AddToList'
import List from "./components/List"

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>(data)

  return (
    <div className="App">
      <h1>Best NBA Players</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default App

const data = [
  {
    name: "LeBron James",
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    age: 36,
    note: "Allergic to staying on the same team",
  }
]
