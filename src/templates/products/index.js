import * as S from './styles';
import { Container } from '@material-ui/core';
import withProducts from '../../services/products';

export const Products = () => {
  return (
    <Container fixed>
      <div className="App">
        <header className="App-header">
          <S.Title>Almir</S.Title>
        </header>
      </div>
    </Container>
  );
};

export default withProducts(Products);
