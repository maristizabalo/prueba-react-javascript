import React from 'react';
import Ejercicio from './pages/Ejercicio';
import EjercicioJS from './pages/EjercicioJS';
import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin: 2rem 0;
  color: #333;
`;

const Divider = styled.hr`
  margin: 3rem 0;
  border: none;
  border-top: 2px dashed #ccc;
`;

function App() {
  return (
    <AppContainer>
      <SectionTitle>Ejercicios React + JavaScript </SectionTitle>

      {/* ejercicios de javascript */}
      <EjercicioJS />


      <Divider />

      {/* consumimos api de productos */}
      <Ejercicio />

    </AppContainer>
  );
}

export default App;
