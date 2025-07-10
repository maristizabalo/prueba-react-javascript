import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  width: 250px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Image = styled.img`
  max-width: 100px;
  height: auto;
  margin: 0 auto;
`;

const Title = styled.h4`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const Price = styled.p`
  color: green;
  font-weight: bold;
`;

const Category = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: #555;
`;

const Rating = styled.div`
  font-size: 0.9rem;
  color: #f39c12;
`;

const AddToCartButton = styled.button`
  background-color: #eee;
  padding: 0.5rem 1rem;
  margin-top: auto;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductCard = ({ product }) => {
  const { image, title, price, category, description, rating } = product;

  const shortDesc =
    description.length > 80 ? description.slice(0, 77) + '...' : description;

  const renderStars = (rate) => {
    const stars = Math.round(rate);
    return '★'.repeat(stars) + '☆'.repeat(5 - stars);
  };

  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Price>${price}</Price>
      <Category>{category}</Category>
      <Description>{shortDesc}</Description>
      <Rating>
        {renderStars(rating.rate)} ({rating.rate}) - {rating.count} votos
      </Rating>
      <AddToCartButton onClick={() => alert(`Añadido ${title}`)}>
        Añadir al carrito
      </AddToCartButton>
    </Card>
  );
};

export default ProductCard;
