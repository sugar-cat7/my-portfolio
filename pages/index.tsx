import Head from 'next/head';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import AboutMe from '../components/About';
import DevCards from '../components/DevCards';
import Career from '../components/Career';
import Link from 'next/link';
import useSWR from 'swr';
import fetch from 'node-fetch';

const Home: React.FunctionComponent = () => {
  async function fetcher(url: string): Promise<any> {
    const response = await fetch(url, {
      headers: { 'x-api-key': `${process.env.NEXT_PUBLIC_API_KEY}` },
    });
    return response.json();
  }
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_DAILY_API}`, fetcher);
  if (!data) {
    return <p>now loding</p>;
  }
  const contents = data.contents;

  return (
    <>
      <Layout>
        <AboutMe {...contents[0]} />
        <div className={styles.spacer} />
        <Career {...contents[0]} />

        <div className={styles.spacer} />
        <DevCards {...contents[0]} />
        <div className={styles.spacer} />
      </Layout>
    </>
  );
};

export default Home;
