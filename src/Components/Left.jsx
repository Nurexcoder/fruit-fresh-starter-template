import React from "react";
import styled from "styled-components";
import logo from "../logo.png";

const Container = styled.div`
  flex: 1;
  padding: 7px 42px;
  /* background-color: blue; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;
const Image = styled.img`
  display: flex;
  align-items: center;
  width: 120px;
  height: auto;
  /* align-items: center; */
  margin: auto ;
`;
const Title = styled.h1`
  text-align: center;

  margin: 20px 0;
  line-height: 49px;
  letter-spacing: 1.1px;
  font-family: "Poppins", sans-serif;
  font-size: 2.8rem;
  /* font-weight: ; */
`;
const NotifiedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  /* justify-content: center; */
  /* align-items: center; */
`;
const Message = styled.h4`
  margin: 6px 0;
  font-weight: 600;
`;
const Input = styled.input`
  margin-top: 10px;
  padding: 5px 31px;
  width: 250px;
  height: 30px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 9px;
`;
const Button = styled.button`
  padding: 9px 31px;
  margin: 5px 0;
  background-color: #48c56e;
  /* outline: none; */
  border: 2px solid #73d290;
  border-radius: 5px;
  color: white;
`;
const SocialIcons = styled.div``;
const SocialIcon = styled.img``;
const Span = styled.span`
  font-size: 3rem;
  margin: 0 40%;
`;

export const Left = () => {
  return (
    <Container>
      <Image src={logo} />
      <Title>
        A website for <br /> Fruit dilivery <Span>in</Span> <br /> Lakhimpur
      </Title>
      <NotifiedContainer>
        <Message>GET NOTIFIED WHEN WE GO LIVE</Message>
        <Input type="email" placeholder="Your Email" />
        <Button type="submit">Subscribe</Button>
      </NotifiedContainer>
      <SocialIcons></SocialIcons>
    </Container>
  );
};
