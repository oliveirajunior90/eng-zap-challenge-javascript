import withStyles from './style';
import { compose } from 'redux';
import withProducts from 'services/products';
import ProductCard from 'components/product-card';
import Jumbotron from 'components/jumpbotrom';
import { Container, Grid } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom';
import withLoading from 'components/loading';
import LinearProgress from '@material-ui/core/LinearProgress';

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

const PaginationUI = ({ onChangePage, currentPage, pageTotal, classes }) => {
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

const Loading = ({ progress, classes }) => (
  <div className={classes.loading}>
    <LinearProgress variant="determinate" value={progress} />
    <p className={classes.loadingText}>Carregando...</p>
  </div>
);

export const Products = ({
  products,
  businessType,
  pageTotal,
  currentPage,
  onChangePage,
  brand,
  classes,
  counter,
}) => {
  return (
    <>
      <Jumbotron text={businessType.label} />
      <div className={classes.wrapper} id="wrapper">
        {counter < 100 ? (
          <Loading progress={counter} classes={classes} />
        ) : (
          <Container fixed maxWidth="md">
            <ProductCardList products={products} brand={brand} />
            <PaginationUI
              classes={classes}
              onChangePage={onChangePage}
              currentPage={currentPage}
              pageTotal={pageTotal}
            />
          </Container>
        )}
      </div>
    </>
  );
};

const withComponents = compose(withProducts, withLoading, withStyles);
export default withComponents(Products);
