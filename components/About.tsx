import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import styles from './About.module.css';
import dataset from '../assets/data.json';
import Modal from './Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(8),
    },
  }),
);

const corpdatas = dataset;

const AboutMe: React.FunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className={styles.toptitle}>About me</h1>
      <div className={styles.wrapper} id="section1">
        <div className={styles.layout}>
          <div className={styles.icon}>
            <Image
              src="/images/myicon.png"
              width={300}
              height={300}
              className={styles.circle}
            />
            <div className={styles.text}>sugar</div>
            <div className={styles.spacer} />
            <div>
              <a href="https://twitter.com/sugar235711">
                <Image
                  src="/images/twitter.png"
                  width={50}
                  height={50}
                  className={styles.circle}
                />
              </a>
              <span className={styles.spacer} />
              <a href="https://sugarking.hatenablog.com/">
                <Image
                  src="/images/hatena.png"
                  width={50}
                  height={50}
                  className={styles.circle}
                />
              </a>
              <span className={styles.spacer} />
              <a href="https://github.com/toshikingggg">
                <Image
                  src="/images/github.png"
                  width={50}
                  height={50}
                  className={styles.circle}
                />
              </a>
            </div>
          </div>
          <div className={styles.spacer} />
          <div className={styles.profile}>
            <Paper elevation={3} className={styles.profile_c}>
              {corpdatas.profile}
            </Paper>
            <div className={styles.spacer} />
            <div>使用可能な技術</div>
            <Image src="/images/p_icon.png" width={500} height={150} />
          </div>
        </div>
        <h1>Career</h1>
        {corpdatas.datalist.map((corpdata) => (
          <>
            <div className={styles.corp}>
              <div>
                <Image
                  src={`/images${corpdata.image}`}
                  width={120}
                  height={120}
                  className={styles.corpicon}
                />
                <div>{corpdata.term}</div>
              </div>
              <Paper elevation={3} className={styles.corptext}>
                {corpdatas.text[corpdata.id]}({corpdata.skill})
              </Paper>
            </div>
          </>
        ))}
        <div className={styles.spacer} />
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          size="large"
          onClick={handleClickOpen}
        >
          お問い合わせ
        </Button>
        <Modal open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default AboutMe;
