import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #e6f6f5;
  border: none;
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 6px;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.h4`
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.25rem;
`;

const Resultado = styled.p`
  font-weight: normal;
  margin: 0;
`;

const EjerciciosJS = () => {
  // EJERCICIO 1
  let meses = ["Enero", "Marzo", "Abril", "Julio", "Junio"];
  meses.push("Febrero", "Mayo");
  let ordenMeses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
  ];
  meses.sort((a, b) => ordenMeses.indexOf(a) - ordenMeses.indexOf(b));

  const resultado1_1 = meses;
  const resultado1_2 = meses.join("|");

  // EJERCICIO 2
  let array2 = [1, 2, [3], [4, 5], 6, []];
  let plano = array2.flat();
  let resultado2_2 = plano.slice().reverse().join("-");

  return (
    <div>
      <Title>Ejercicios de JavaScript</Title>

      <Section>
        <Subtitle>Ejercicio 1: Ordenar meses</Subtitle>

        <Label>Resultado 1</Label>
        {resultado1_1.map((mes, i) => (
          <Button key={i} value={mes}>
            {mes}
          </Button>
        ))}

        <Label>Resultado 2</Label>
        <Resultado>{resultado1_2}</Resultado>
      </Section>

      <Section>
        <Subtitle>Ejercicio 2: Números mezclados</Subtitle>

        <Label>Resultado 1</Label>
        {plano.map((num, i) => (
          <Button key={i} value={num}>
            {num}
          </Button>
        ))}

        <Label>Resultado 2</Label>
        <Resultado>{resultado2_2}</Resultado>
      </Section>
    </div>
  );
};

export default EjerciciosJS;
