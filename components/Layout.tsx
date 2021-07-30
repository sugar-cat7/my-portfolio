// import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Layout.module.css';

const Layout: React.FunctionComponent = ({ children }) => (
  //   const x = useMotionValue(0);
  //   const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  <>
    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
