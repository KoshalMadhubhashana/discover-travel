import React, { Component } from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer>
          <div class="footer_content">
            <div class="quick_links">
              <h4>Contact Us</h4>
              <ul id="contacts">
                <li>
                  <a href="#">
                    <span>
                      <FontAwesomeIcon icon={faPhone} />
                    </span>{" "}
                    011-2589666
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <FontAwesomeIcon icon={faMailBulk} />
                    </span>{" "}
                    discovertravel@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Stay connected</h4>
              <ul className="sociel">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlusSquare} />
                  </a>
                </li>
              </ul>
            </div>

            <hr />
          </div>
        </footer>
        <div class="license-details">
          <center>
            <p>
              &copy; 2022 Discover Travel | All Rights Reserved |
              <span> Terms of service</span> | <span>Privacy</span>
            </p>
          </center>
        </div>
      </div>
    );
  }
}

export default Footer;
