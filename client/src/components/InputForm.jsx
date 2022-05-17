import React, { useState } from "react";
import styled from "styled-components";
import { DropSelectMenu } from "./DropSelectMenu.jsx";
const InputFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 1rem;
`;
const InputTextArea = styled.input`
  padding-left: 10px;
  height: 4rem;
  border-radius: 16px;
  border-width: 0px;
  font-family: sans-serif;
  font-size: 1.2rem;
  width: 100%;
`;
const InputButtonContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  justify-content: flex-end;
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
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgb(163, 88, 3);
  }
`;
const Input = styled.form`
  width: auto;
`

export const InputForm = ({ getResponse, responses }) => {
  const [prompt, setPrompt] = useState("");
  const [engine, setEngine] = useState("text-curie-001");
  return (
    <InputFormContainer>
      <h1>Ask me anything</h1>
      <Input>
      <InputTextArea
        placeholder="Ask me anything... anything!"
        type="text"
        value={prompt}
        required
        onChange={(e) => {
          e.preventDefault();
          setPrompt(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && prompt !== "") {
            getResponse(prompt, engine);
            setPrompt("");
          }
        }}
      ></InputTextArea>
      </Input>
      <InputButtonContainer>
        <DropSelectMenu
          options={[
            { name: "Curie", engine: "text-curie-001" },
            { name: "DaVinci", engine: "text-davinci-002" },
            { name: "Babbage", engine: "text-babbage-001" },
            { name: "Ada", engine: "text-ada-001" },
          ]}
          setEngine={setEngine}
        />
        <InputButton
          onClick={(e) => {
            getResponse(prompt, engine);
            setPrompt("");
          }}
        >
          Submit
        </InputButton>
      </InputButtonContainer>
    </InputFormContainer>
  );
};
