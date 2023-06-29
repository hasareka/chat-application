import React from 'react'
import Attach from '../images/attach.png'
import Cam from '../images/cam.png'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Cam} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input