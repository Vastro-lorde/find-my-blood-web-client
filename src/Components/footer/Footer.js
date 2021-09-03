import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div>
      <div className="footer">
        <footer className="row  py-5 my-5 border-top">
          <div className="col-md-3">
            <img src="../../../img/Group.svg" alt=""/>
            <h5>GET BLOOD</h5>
            <p>
              Get blood provides progressive ways to locate blood easily,
              accessible on mobile and online for everyone
            </p>
            <p className="text-white">©Find My Blood.All rights reserved</p>
          </div>

          <div className="col-md-3">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Search
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Notification
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  My Account
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Instagram
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Twitter
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Terms & Policies</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Privacy Policies
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="" className="nav-link p-0 text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer

