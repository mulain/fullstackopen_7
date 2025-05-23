import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map((anecdote) => (
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>
      ))}
    </ul>
  </div>
)


AnecdoteList.propTypes = {
    anecdotes: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default AnecdoteList
