import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import styles from './About.module.css';
import dataset from '../assets/data.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(8),
    },
  }),
);

const corpdatas = dataset;

const Career: React.FunctionComponent = () => {
  const classes = useStyles();

  // const url =  `${process.env.PUBLIC_URL}`
  // // console.log(url)
  return (
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
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          size="large"
        >
          お問い合わせ
        </Button>
      </div>
    </>
  );
};

export default Career;
