import React, { useEffect, useState } from 'react'
import './App.css';
import List from './components/List'

interface Sub {
  nick: string,
  avatar: string,
  subMounths: number,
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubs: number
}

const INITIAL_STATE = [
  {
    nick: 'dalape',
    subMounths: 2,
    avatar: 'https://i.pravatar.cc/150?u=dalape',
    description: 'lorem impus rejs acepw qwjdqv',
  },
  {
    nick: 'pepi ',
    subMounths: 5,
    avatar: 'https://i.pravatar.cc/150?u=pepi',
    description: 'lorem impus rejs acepw qwjdqv',
  }
]

const App = () => {

  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubs, setNewSubs] = useState<AppState["newSubs"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <>
      <div className="App">
        <h1>Dev Subs</h1>
      </div>
      <List subs={subs} />

    </>

  )
}

export default App