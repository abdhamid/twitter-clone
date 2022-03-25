import PropTypes from 'prop-types'
import React from 'react';
import './Trends.css'


class Trends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "category": props.category,
            "title": props.title,
            "total_tweets": props.total_tweets
        }
    }

    render() {
        return (
            <div className='trend'>
                <p>{this.state.category}</p>
                <h4>{this.state.title}</h4>
                <p>{this.state.total_tweets} Tweets</p>
            </div>
        )
    }
}

export default Trends
