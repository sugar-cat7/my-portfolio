import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from './About.module.css';
import dataset from '../assets/data.json';
import DevExperience from './DevExperimence';

const corpdatas = dataset;
const profImg = dataset.profileImage;
const iconsize = 30;
const AboutMe: React.FunctionComponent = () => (
  <>
    {/* <h1 className={styles.toptitle}>About me</h1> */}
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <Image
            src="/images/myicon.png"
            width={200}
            height={200}
            className={styles.circle}
          />
          <div className={styles.text}>sugar</div>
          <div className={styles.icons}>
            <span className={styles.spacer} />
            {profImg.map((i) => (
              <>
                <a href={i.srcurl}>
                  <Image
                    src={i.imgurl}
                    width={iconsize}
                    height={iconsize}
                    className={styles.circle}
                  />
                </a>
                <span className={styles.spacer} />
              </>
            ))}
            {/* <a href="https://twitter.com/sugar235711">
              <Image
                src="/images/twitter.png"
                width={iconsize}
                height={iconsize}
                className={styles.circle}
              />
            </a>
            <span className={styles.spacer} />
            <a href="https://sugarking.hatenablog.com/">
              <Image
                src="/images/hatena.png"
                width={iconsize}
                height={iconsize}
                className={styles.circle}
              />
            </a>
            <span className={styles.spacer} />
            <a href="https://github.com/toshikingggg">
              <Image
                src="/images/github.png"
                width={iconsize}
                height={iconsize}
                className={styles.circle}
              />
            </a> */}
          </div>
        </div>
        <div className={styles.profile}>
          <div className={styles.profiletext}>Profile</div>
          <Paper elevation={3} className={styles.profile_c}>
            <div className={styles.text}>{corpdatas.profile}</div>
          </Paper>

          {/* <div className={styles.spacer} /> */}
          {/* <div>使用可能な技術</div> */}
          {/* <Image src="/images/p_icon.png" width={500} height={150} /> */}
        </div>
      </div>
      {/* <p className={styles.devtitle}>作ったもの(個人)</p>
      <DevExperience /> */}
      <div className={styles.buttons}>
        <Link
          activeClass="active"
          to="section1"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          <button type="button" className={styles.btnCircleBorderSimple}>
            product
          </button>
        </Link>
        <div className={styles.buttonspacer} />
        <Link
          activeClass="active"
          to="section2"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          <button type="button" className={styles.btnCircleBorderSimple}>
            <span>career</span>
          </button>
        </Link>
      </div>
    </div>
  </>
);
export default AboutMe;
