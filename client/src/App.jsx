import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { InputForm } from './components/InputForm.jsx';
import { Response } from './components/Response.jsx';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ResponseList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  const [responses, setResponses] = useState([]);
  const [gettingResponse, setGettingResponse] = useState(false);
  const getResponse = (prompt) => {
    axios.post('/prompts', {
      prompt: prompt,
    })
    .then(response => {
      setResponses([...responses, response.data])
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <AppContainer>
      <InputForm getResponse={getResponse} responses={responses}/>
      <ResponseList>
        {responses.map((response) => (
          <Response response={response} key={response.id} />
        ))}
      </ResponseList>
    </AppContainer>
  );
};