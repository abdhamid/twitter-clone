import PropTypes from 'prop-types'
import './Tweet.css'
import Avatar from './Avatar'

function Tweet(props) {
    const { user, fullName, createdOn, children } = props

    return (
        <div className="tweet">
            <Avatar name={user} />
            <div>
                <div className="tweet-header">
                    <span className='tweet-name'>{fullName}</span>
                    <span className="tweet-user">@{user}</span>
                    ·{}
                    <span className="tweet-created-on">{createdOn.toString().split(' ').slice(0, 4).join(' ')}</span>
                </div>
                <div className="tweet-content">{children}</div>
            </div>
        </div>
    )
}

Tweet.propTypes = {
    user: PropTypes.string,
    createdOn: PropTypes.string,
}

export default Tweet