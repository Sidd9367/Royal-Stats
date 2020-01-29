import React from 'react';
import './App.css';


function App() {
  return (
    <div className="Homepage">
      <div className=" App"> </div>
        <div className=" Home">
            <label className="home_label1">ROYAL STATS</label>
             <label className="home_label2">Access all players and clan easily</label>
             <div className="d-flex">
             <select className="home_select1">
              <option value="Player">Player</option>
              <option value="Clan">Clan</option>
            </select>
            <input type="text" className="home_text1" placeholder="TAG #XXXXXX "></input>
            </div>
        <button className=" home_button1 ">✓ Search</button>
       
       
        </div>
</div>
  );
}

export default App;
