import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import styles from './About.module.css';

type Props = {
  id: string;
  profile: string;
  profileImage: {
    id: string;
    srcurl: string;
    img: { url: string };
  }[];
};
const AboutMe: React.FunctionComponent<Props> = ({ profile, profileImage }) => {
  const iconsize = 30;
  return (
    <>
      <div className={styles.wrapper} id="section0">
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
              {profileImage.map((i) => (
                <>
                  <a key={i.id} href={i.srcurl}>
                    <Image
                      src={i.img.url}
                      width={iconsize}
                      height={iconsize}
                      className={styles.circle}
                    />
                  </a>
                  <span className={styles.spacer} />
                </>
              ))}
            </div>
          </div>
          <div className={styles.profile}>
            <div className={styles.profiletext}>Profile</div>
            <Paper elevation={3} className={styles.profile_c}>
              <div className={styles.text}>{profile}</div>
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
