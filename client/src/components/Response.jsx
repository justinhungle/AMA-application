import React, { useState } from "react";
import styled from "styled-components";

const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
const Bubble = styled.div`
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  max-width: 70%;
  height: auto;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;
`;

const PromptBubbleLeft = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 1em;
  margin-left: 0.5em;
`;

const PromptBubbleRight = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 0.5em;
`;

export const Response = ({ response }) => {
  return (
    <ResponseContainer>
      <PromptBubbleLeft>
        <Bubble>{response.prompt}</Bubble>
      </PromptBubbleLeft>
      <PromptBubbleRight>
        <Bubble>{response.response}</Bubble>
      </PromptBubbleRight>
    </ResponseContainer>
  );
};
