import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import styles from './Career.module.css';
import dataset from '../assets/data.json';
// import Modal from './Modal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(8),
    },
  }),
);

const corpdatas = dataset;

const Career: React.FunctionComponent = () => (
  <>
    {/* <h1 className={styles.toptitle}>Career</h1> */}
    <div className={styles.wrappercareer} id="section2">
      <div className={styles.jobtext}>Part-time Job</div>
      {corpdatas.datalist.map((corpdata) => (
        <>
          <div className={styles.corp}>
            <div className={styles.corpspacer}>
              <Image
                src={`/images${corpdata.image}`}
                width={150}
                height={70}
                className={styles.corpicon}
              />
              <div>{corpdata.term}</div>
            </div>
            <Paper elevation={3} className={styles.corptext}>
              <div className={styles.text}>
                {corpdatas.text[corpdata.id]} ({corpdata.skill})
              </div>
            </Paper>
          </div>
        </>
      ))}
      <div className={styles.spacer_bottom} />
      <p>Contact</p>
      <EmailIcon fontSize="large" />
      <div>
        <span className={styles.line}>sugar.king.contact@gmail.com</span>
      </div>
    </div>
  </>
);
export default Career;
