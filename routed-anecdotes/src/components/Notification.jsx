import PropTypes from 'prop-types'

const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if (!notification) {
    return null
  }

  return <div style={style}>{notification}</div>
}

export default Notification

Notification.propTypes = {
  notification: PropTypes.string.isRequired,
}
