import React from 'react';
import './Feed.css';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import initialTweets from './tweets.json'
import Tweet from './Tweet';
import Timeline from './Timeline';
import { FaTwitter } from 'react-icons/fa'
import ComposeForm from './ComposeForm';

const CURRENT_USER = 'whodatbe'

function Feed() {
  const [tweets, setTweets] = useState(initialTweets)

  const handlePostTweet = (content) => {
    const newTweet = {
      content,
      id: nanoid(),
      created_on: Date(Date.now()),
      user: CURRENT_USER,
      fullname: 'Wait',
      comments_count: 0,
      retweets_count: 0,
      favorites_count: 0,
    }
    setTweets([...tweets, newTweet])
  }
  return (
    <div className='feed'>
      <h2>Home</h2>
      <ComposeForm onSubmit={handlePostTweet}/>
      <div className='separator'></div>
      <Timeline tweets={tweets} />
    </div>
  );
}

export default Feed;
