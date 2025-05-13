import PropTypes from 'prop-types'

// local
import { useField } from '../hooks/useField'

const CreateNew = (props) => {
  const contentField = useField('text')
  const authorField = useField('text')
  const infoField = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: contentField.attributes.value,
      author: authorField.attributes.value,
      info: infoField.attributes.value,
      votes: 0,
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    contentField.reset()
    authorField.reset()
    infoField.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...contentField.attributes} />
        </div>
        <div>
          author
          <input {...authorField.attributes} />
        </div>
        <div>
          url for more info
          <input {...infoField.attributes} />
        </div>
        <button type="submit">create</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </div>
  )
}

CreateNew.propTypes = {
  addNew: PropTypes.func.isRequired,
}

export default CreateNew
