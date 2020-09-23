import React from 'react'
import './style.css'

import SearchIcon from '@material-ui/icons/Search'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default () => {
  return (
    <div className="chat-window">
      <div className="header">
        <div className="header-info">
          <img src="https://avatars2.githubusercontent.com/u/61289109?s=400&u=5341aaa881134dc973ba04a5f9588f4a92e718da&v=4" alt="avatar" />
          <span>Carlos Cenci</span>
        </div>
        <div className="header-actions">
          <ul>
            <li><SearchIcon style={{ color: '#919191' }} /></li>
            <li><AttachFileIcon style={{ color: '#919191' }} /></li>
            <li><MoreVertIcon style={{ color: '#919191' }} /></li>
          </ul>
        </div>
      </div>
      <div className="content">

      </div>
      <div className="footer"></div>
    </div>
  )
}