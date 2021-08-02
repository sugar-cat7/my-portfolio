import Head from 'next/head';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import AboutMe from '../components/About';
import DevCards from '../components/DevCards';
import Career from '../components/Career';
import Link from 'next/link';
const Home: React.FunctionComponent = () => (
  <>
    <Layout>
      <AboutMe />
      <div className={styles.spacer} />
      <DevCards />
      <div className={styles.spacer} />
      <Career />
      <div className={styles.spacer} />
      <footer className={styles.footer}>
        <div> Copyright © 2021 sugar.</div>
      </footer>
    </Layout>
  </>
);

export default Home;
