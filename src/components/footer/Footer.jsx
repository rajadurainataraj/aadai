import styled from "styled-components";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

const FooterContainer = styled.div`
  background-color: #222222;
  color: #999999;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 24px 10px;
  > div:first-child {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    > ul {
      list-style: none;
      padding-left: 0;
    }
    > ul > h2 {
      margin-bottom: 20px;
      color: #fff;
    }
    > ul > li:first-child {
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;
      margin-bottom: 8px;
    }
    > ul > li {
      padding: 10px 0;
    }
    > ul > li > a {
      text-decoration: none;
      color: inherit;
    }
  }
  > div:nth-child(2) {
    max-width: 1200px;
    height: 0.1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 14px auto;
  }
  > div:nth-child(3) {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    > div:nth-child(2) {
      text-align: center;
      > p {
        margin: 0;
      }
    }
    > div:last-child {
      display: flex;

      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border: 2.5px solid #999999;
        border-radius: 100%;
        margin: 0 12px;
        font-size: 24px;
      }
      > div:hover:first-child {
        background-color: #1b46b4;
        color: #fff;
        font-size: 26px;
      }
      > div:hover:nth-child(2) {
        background-color: #cb2828;
        color: #fff;
        font-size: 26px;
      }
      > div:hover:nth-child(3) {
        background-color: #0985f1;
        color: #fff;
        font-size: 26px;
      }
      > div:hover:nth-child(4) {
        background-color: #f63a3a;
        color: #fff;
        font-size: 26px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <ul>
            <h2>Aadai Online</h2>
            <li>+91 99444 32385</li>
            <li>customercare@aadaionline.in</li>
          </ul>
          <ul>
            <li>Pages</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Why Aadai Online</a>
            </li>
          </ul>
          <ul>
            <li>Help</li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
          <ul>
            <li>Quick Links</li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">Best Sellers</a>
            </li>
            <li>
              <a href="#">Size Guide</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div>
          <figure>
            <img
              src="https://www.poomex.in/public/vendor/conceps-admin/assets/poomax_front/images/card.png"
              alt="payment"
              width={"300px"}
              height={"25px"}
            />
          </figure>
          <div>
            <p>Copyright © 2021 Poomex Clothing Company All Rights Reserved.</p>
            <p>Developed by Conceps</p>
          </div>
          <div>
            <div>
              <TiSocialFacebook />
            </div>

            <div>
              <TiSocialInstagram />
            </div>
            <div>
              <TiSocialTwitter />
            </div>
            <div>
              <TiSocialYoutube />
            </div>
          </div>
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
