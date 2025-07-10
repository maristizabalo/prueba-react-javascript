import { useState, useMemo } from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const RefreshButton = styled.button`
  margin-top: 2rem;
  background-color: #FF4240;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e03d3b;
  }
`;

const Ejercicio1 = () => {
  const { products, loading, error } = useFetchProducts();
  const [refreshKey, setRefreshKey] = useState(0);

  // Obtenemos productos aleatorios cada vez que se refresca el boton
  const randomProducts = useMemo(() => {
    if (!products.length) return [];
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }, [products, refreshKey]);

  //Mostrar spinner si esta cargando
  if (loading) return <Spinner />;

  //Mostrar error en caso de que por algun motivo no carguen los productos
  if (error) return <p>Error: {error}</p>;

  return (
    <Section>
      <h2>Productos destacados</h2>
      <Grid>
        {randomProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>

      <RefreshButton onClick={() => setRefreshKey(prev => prev + 1)}>
        Actualizar productos
      </RefreshButton>
    </Section>
  );
};

export default Ejercicio1;
