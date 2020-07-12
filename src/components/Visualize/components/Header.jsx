import React from 'react';
import ExibeOrdem from './ExibeOrdem/index';
const Sidebar = ({ verify,text,array,searchNumber,pre_ordem,em_ordem,pos_ordem,current, setCurrent, insert, data,deleteEle,randomEle }) => {
  return (

    <div className="sidebar-wrapper">
      <div className="manipulate">
        <input
          className="next-node-input fullwidth"
          type="number"
          name="current"
          value={current}
          onChange={e => setCurrent(e.target.value)}
          placeholder="Enter Number ..."
        />
        <button
          className="next-node-button fullwidth"
          disabled={!current || isNaN(current)}
          onClick={() => {
            insert(parseInt(current, 10));
            setCurrent('');
          }}
        >
          Insert
        </button>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={!current || isNaN(current)}
            onClick={() => searchNumber(parseInt(current,10))}
          > 
          Search
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={!current || isNaN(current)}
            onClick={() => deleteEle(parseInt(current,10))}
          > 
          Delete
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => em_ordem(data.root)}
          > 
          In Order
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => pre_ordem(data.root)}
          > 
          Pre Order
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
                className="next-node-button fullwidth"
                disabled={false}
                onClick={() => pos_ordem(data.root)}
              > 
              Post Order
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            onClick={() => {
              var value = parseInt((Math.floor(Math.random() * 100)),10);
              insert(value);
              setCurrent(value);
            }}
          >Random</button>
        </div>
      </div>
    <div className= "container-div"> 
      {verify && <text style = {{fontSize:15,color:"red",fontWeight:"bold"}}>{text}</text>}
      {array.length > 0 && <ExibeOrdem array = {array}/>}
    </div>
    </div>
    
  );
};

export default Sidebar;
