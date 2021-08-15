import { useStyles } from './styles';
import withProducts from '../../services/products';
import ProductCard from '../../components/product-card';
import Jumbotron from '../../components/jumpbotrom';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

const ProductCardsGrid = ({ products }) => (
  <Grid container spacing={3}>
    {products.map((data) => (
      <ProductCard key={data.id} data={data} />
    ))}
  </Grid>
);

export const Products = ({ products, businessType }) => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron text={businessType} />
      <div className={classes.wrapper}>
        <Container fixed maxWidth="md">
          <ProductCardsGrid products={products} />
          <Pagination className={classes.pagination} count={3} />
        </Container>
      </div>
    </>
  );
};

export default withProducts(Products);
