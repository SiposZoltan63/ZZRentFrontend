import React from 'react'

export default function Header(props) {
  return (
        <div className="felso d-flex align-items-center justify-content-between p-3">
          <img src="https://github.com/SiposZoltan63/ZZRentFrontend/raw/main/img/logo.jpeg" id="logo" alt="ZZRent Logo" style={{height: "50px"}}/>
          <input type="text" id="searchBar" className="search-box form-control w-50" placeholder="Search vehicles..." onKeyUp="renderProducts()"/>
          <button type="button" id="loginbutton" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#authModal">Sign in/Sign up</button>
        </div>
  )
}
