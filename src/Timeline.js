import PropTypes from 'prop-types'
import Tweet from './Tweet'
import './Timeline.css'

function Timeline({ tweets }) {
    return (
        <ul className='timeline'>
            {tweets
            .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
            .map(({id, user, fullname, created_on, content}) => (
                <li key={id} className='timeline-item'>
                    <Tweet user={user} createdOn={created_on} fullName={fullname}>
                        {content}
                    </Tweet>
                </li>
            ))}
        </ul>
    )
}

Timeline.propTypes = {
    tweets: PropTypes.array,
  }
  
  export default Timeline

