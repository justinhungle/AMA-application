import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputForm } from './components/InputForm.jsx';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const App = () => {

  return (
    <AppContainer>
      <InputForm />
    </AppContainer>
  );
};