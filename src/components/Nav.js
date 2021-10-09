import React from "react";
import styled from "styled-components";
import { IoClose, IoNotifications } from 'react-icons/io5';
import { BsShareFill, BsStarFill } from 'react-icons/bs';


const Container = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 1.4rem;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #5600e8;
  color: rgba(255,255,255,0.7);
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > svg {
    margin: 0 1rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & > svg {
    margin: 0 1rem;
  }
`;

const Title = styled.h1`
  color: #FFF;
  margin: 0 1rem;
  font-size: 1.4rem;
`;

const Nav = () => {
  return (
    <Container>
      <LeftSide>
        <IoClose />
        <Title>
          Jump Application
        </Title>
      </LeftSide>
      <RightSide>
        <BsShareFill />
        <BsStarFill />
        <IoNotifications />
      </RightSide>
    </Container>
  );
};

export default Nav;