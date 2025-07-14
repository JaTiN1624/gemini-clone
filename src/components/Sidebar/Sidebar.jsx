import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../Context/Context";
const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt} = useContext(context)
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className="sidebar">

      <div className="top">
        <img
          onClick={() => 
           
            setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            
            {prevPrompts.map((item,index)=>{
              return(
                <div onClick={() =>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item} ...</p>
            </div>

              )
            })}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          <p>Activity</p>
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
