import React, { useState } from "react";
import styled from "styled-components";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Input(props) {
  const [hide, setHide] = useState(false)

  return (
    <Container>
      <StyledInput
        required
        {...props}
        type={hide ? "password" : "text"}
      />
      <EyeIcon onClick={() => setHide(!hide)}>
        {hide ? <AiFillEyeInvisible /> : <AiFillEye />}
      </EyeIcon>
    </Container>
  );
};

const EyeIcon = styled.div`
  right: 1rem;
  font-size: 1.2rem;
  position: absolute;
`

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 1rem;
  margin: 0.5rem 0;
  border-radius: 6px;
  border: 0.16rem solid #8080802e;
  &:focus {
    border-color: #5600e8;
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export default Input;
