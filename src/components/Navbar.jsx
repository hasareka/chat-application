import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <span className="logo">Thath Chat</span>
        <div className="user">
            <img src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar