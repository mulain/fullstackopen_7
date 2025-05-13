import { useState } from 'react'
import { Routes, Route, useMatch, useNavigate } from 'react-router-dom'

// local
import Menu from './components/Menu'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import About from './components/About'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const [notification, setNotification] = useState('')
  const match = useMatch('/anecdotes/:id')
  const navigate = useNavigate()

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))

    const message = `new anecdote '${anecdote.content}' created!`
    setNotification(message)
    setTimeout(() => {
      setNotification('')
    }, 5000)
    navigate('/')
  }

  const anecdoteById = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null

  //   const vote = (id) => {
  //     const voted = {
  //       ...anecdoteById,
  //       votes: anecdoteById.votes + 1,
  //     }

  //     setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)))
  //   }

  return (
    <div>
      <Notification notification={notification} />
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdoteById} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
