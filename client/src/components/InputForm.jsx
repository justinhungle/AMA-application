import React, { useState } from "react";
import styled from "styled-components";
const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 1rem;
`;
const InputTextArea = styled.textarea`
  padding-left: 19px;
  height: 6rem;
  border-radius: 16px;
  border-width: 0px;
  padding-top: 12px;
  font-family: sans-serif;
  font-size: 1rem;

`;
const InputButtonContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: end;
`;
const InputButton = styled.button`
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1.8px;
  height: 3em;
  width: 8em;
  color: white;
  font-family: sans-serif;
  background-color: rgb(255, 138, 4);
  border: none;
  border-radius: 12px;
  &:hover {
    background-color: rgb(163, 88, 3);
  }
`;

export const InputForm = ({ getResponse, responses }) => {
  const [prompt, setPrompt] = useState("");
  return (
    <InputFormContainer>
      <h1>Ask me anything</h1>
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
        <InputButton
          onClick={(e) => {
            getResponse(prompt);
            setPrompt("");
          }}
        >
          Submit
        </InputButton>
      </InputButtonContainer>
    </InputFormContainer>
  );
};
