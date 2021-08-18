// import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './Layout.module.css';
import Head from 'next/head';
// import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
const Layout: React.FunctionComponent = ({ children }) => (
  //   const x = useMotionValue(0);
  //   const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  <>
    <Head>
      <title>sugar's portfolio</title>
    </Head>
    <header>
      <nav className="bg-gray-800 w-screen fixed top-0 z-50">
        <div className="flex items-center pl-8 h-14 justify-center">
          <div className="flex space-x-4">
            <Link
              activeClass="active"
              to="section0"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                Top
              </div>
            </Link>
            <Link
              activeClass="active"
              to="section1"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                product
              </div>
            </Link>
            <Link
              activeClass="active"
              to="section2"
              spy
              smooth
              offset={-70}
              duration={500}
            >
              <div className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                career
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
    <div className="text-center p-30 m-8">{children}</div>
    <footer className="w-full text-center border-t-2 h-12 p-2">
      <div> Copyright © 2021 sugar.</div>
    </footer>
  </>
);

export default Layout;
