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

const PaginationUI = ({ onChangePage, currentPage, pageTotal }) => {
  const classes = useStyles();

  if (pageTotal < 2) return null;

  return (
    <Pagination
      onChange={onChangePage}
      className={classes.pagination}
      page={currentPage}
      count={pageTotal}
    />
  );
};

export const Products = ({
  products,
  businessType,
  pageTotal,
  currentPage,
  onChangePage,
}) => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron text={businessType.label} />
      <div className={classes.wrapper} id="wrapper">
        <Container fixed maxWidth="md">
          <ProductCardsGrid products={products} />
          <PaginationUI
            onChangePage={onChangePage}
            currentPage={currentPage}
            pageTotal={pageTotal}
          />
        </Container>
      </div>
    </>
  );
};

export default withProducts(Products);
