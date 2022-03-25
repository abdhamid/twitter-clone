import { Search } from "@material-ui/icons";
import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import "./Widgets.css";
import trends from './trends.json'
import Trends from "./Trends";

class Widgets extends React.Component {
  render() {
    return (
      <div className="widgets">
        <div className="widgets__input">
          <Search className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>Trends for you</h2>
          <ul className='trend_feed'>
            {trends.map(({ id, category, title, total_tweets }) => (
              <li key={id} className='trend-item'>
                <Trends category={category} title={title} total_tweets={total_tweets} />
              </li>
            ))}
          </ul>


        </div>
      </div>
    );
  }

}

export default Widgets;