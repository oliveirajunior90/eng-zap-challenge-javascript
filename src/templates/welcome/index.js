import withStyles from './style';
import { Link } from 'react-router-dom';
import zapLogo from 'static/zap.svg';
import vivaLogo from 'static/vivareal.svg';

const Welcome = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.item}>
        <img className={classes.logoZap} src={zapLogo} alt="zap logo" />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/zap/venda">
              Comprar
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/zap/aluguel">
              Alugar
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.item}>
        <img className={classes.logoViva} src={vivaLogo} alt="viva logo" />
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/vivareal/venda">
              Comprar
            </Link>
          </li>
          <li className={classes.listItem}>
            <Link className={classes.link} to="/vivareal/aluguel">
              Alugar
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default withStyles(Welcome);
