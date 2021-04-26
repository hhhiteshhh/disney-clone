import React, { useState } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  logout,
} from "../features/userSlice";
import { useEffect } from "react";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const logoutFromApp = () => {
    auth.signOut().then(dispatch(logout())).then(history.push("/"));
  };

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result.user.displayName);
        // console.log(result.user.email);
        // console.log(result.user.photoURL);
        setUser(result.user);
        history.push("/home");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg onClick={logoutFromApp} src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  position: sticky;
  top: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  cursor: pointer;
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  margin: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    padding: 0 12px;
    align-items: center;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgba(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  cursor: pointer;
  height: 70%;
  border-radius: 50%;
`;
