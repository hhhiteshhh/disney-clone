import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Descripton>
            © 2021 STAR. All Rights Reserved. HBO, Home Box Office and all
            related channel and programming logos are service marks of, and all
            related programming visuals and elements are the property of, Home
            Box Office, Inc. All rights reserved.
          </Descripton>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 100vw;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  width: 100%;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;

const Descripton = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 12px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 600px;
  min-height: 1px;
  vertical-align: bottom;
  display: inline-block;
  width: 100%;
`;
