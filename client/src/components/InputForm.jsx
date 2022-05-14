import React, { useState } from "react";
import styled from "styled-components";
const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
`;
const InputTextArea = styled.textarea`
  height: 8rem;
`;
const InputButtonContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: end;
`;
const InputButton = styled.button``;

export const InputForm = ({ getResponse, responses }) => {
  const [prompt, setPrompt] = useState("");
  return (
    <InputFormContainer>
      <h1>Ask Me Anything</h1>
      <InputTextArea
        placeholder="Ask me anything... anything!"
        value={prompt}
        required
        onChange={(e) => {
          e.preventDefault();
          setPrompt(e.target.value);
        }}
      ></InputTextArea>
      <InputButtonContainer>
        <InputButton onClick={(e) => {
          getResponse(prompt);
        }}>Submit</InputButton>
      </InputButtonContainer>
    </InputFormContainer>
  );
};
