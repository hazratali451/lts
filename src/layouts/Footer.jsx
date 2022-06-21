import Link from "next/link";
import styled from "styled-components";

import Logo from "../../public/images/brand/logo.png";
import Facebook from "../../public/images/icons/facebook.svg";
import Twitter from "../../public/images/icons/twitter.svg";
import Google from "../../public/images/icons/google.svg";
import Twitch from "../../public/images/icons/twitch.svg";

const Footer = () => {
  return (
    <Style>
      <div className="container">
        <div className="footer">
          <a href="/" className="logo">
            <img src={Logo.src} alt="" />
          </a>
          <div className="menu">
            <a href="#home">Menu</a>
            <a href="#how-we-work">How we work</a>
            <a href="#our-services">Our services</a>
            <a href="#our-customers">our customers</a>
          </div>
          <div className="social-media">
            <a href="https://facebook.com" className="facebook-icon">
              <Facebook />
            </a>
            <a href="https://twitter.com" className="twitter-icon">
              <Twitter />
            </a>
            <a href="https://google.com" className="google-icon">
              <Google />
            </a>
            <a href="https://twitch.com" className="twitch-icon">
              <Twitch />
            </a>
          </div>
        </div>
        <p>
          2022 All rights reserved. -- <Link href="/privacy">Privacy Policy</Link> -
          <Link href="/terms">Terms of Services</Link>
        </p>
      </div>
    </Style>
  );
};

export default Footer;

const Style = styled.section`
  border-top: 1px solid rgba(255, 255, 255, 0.17);
  padding-top: 50px;
  padding-bottom: 28px;
  a {
    :hover {
      color: #20b48e;
    }
  }
  p {
    text-align: center;
    margin-top: 20px;
    a {
      color: #606060;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
  .logo {
    margin-top: 20px;
    margin-right: 4vw;
  }
  .menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    a {
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 20px;
      margin-left: 20px;
      white-space: nowrap;
    }
    @media (max-width: 768px) {
      order: 2;
    }
    @media (max-width: 576px) {
      a {
        flex: 1;
      }
    }
  }
  .social-media {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-left: auto;
    a {
      width: 40px;
      height: 40px;
      background-color: #343444;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      :not(:last-child) {
        margin-right: 12px;
      }
      :hover {
        transition: background-color 0.3s ease-in-out;
        &.facebook-icon {
          background-color: #1877f2;
        }
        &.twitter-icon {
          background-color: #1da1f2;
        }
        &.google-icon {
          background-color: #db4437;
        }
        &.twitch-icon {
          background-color: #9146ff;
        }
      }
    }
    @media (max-width: 768px) {
      order: 1;
      margin-left: 0;
    }
  }
`;
