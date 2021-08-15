import { useStyles } from './style';
import withProducts from '../../services/products';
import ProductCard from '../../components/product-card';
import Jumbotron from '../../components/jumpbotrom';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';

const ProductCardList = ({ products, brand }) => {
  const link = `/${brand.label}/imovel/`;
  return (
    <Grid container spacing={3}>
      {products.map((data) => (
        <Grid item xs={12} sm={6} md={4} key={data.id}>
          <Link to={link + data.id}>
            <ProductCard data={data} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

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
  brand,
}) => {
  const classes = useStyles();
  return (
    <>
      <Jumbotron text={businessType.label} />
      <div className={classes.wrapper} id="wrapper">
        <Container fixed maxWidth="md">
          <ProductCardList products={products} brand={brand} />
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
