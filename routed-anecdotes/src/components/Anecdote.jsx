import PropTypes from 'prop-types'

const Anecdote = ({ anecdote }) => {
  if (!anecdote) {
    return null
  }

  return (
    <div>
      <h2>{anecdote.content}</h2>
      <p>by {anecdote.author}</p>
      <p>
        has {anecdote.votes} votes{' '}
        <a href={anecdote.info} target="_blank" rel="noopener noreferrer">
          more info
        </a>
      </p>
    </div>
  )
}

Anecdote.propTypes = {
  anecdote: PropTypes.oneOfType([
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }),
    PropTypes.oneOf([null]),
  ]),
}

export default Anecdote
