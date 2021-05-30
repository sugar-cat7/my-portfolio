import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import styles from './About.module.css';
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
  // const classes = useStyles();

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  <>
    <h1 className={styles.toptitle}>Career</h1>
    <div className={styles.wrappercareer} id="section2">
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
      <div className={styles.spacer_bottom} />
      <p>Contact</p>
      <EmailIcon fontSize="large" />
      <div>
        <span className={styles.line}>sugar.king.contact@gmail.com</span>
      </div>
      {/* <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          size="large"
          onClick={handleClickOpen}
        >
          お問い合わせ
        </Button>
        <Modal open={open} handleClose={handleClose} /> */}
    </div>
  </>
);
export default Career;
