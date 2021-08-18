import Image from 'next/image';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import styles from './Career.module.css';
// import Modal from './Modal';
import Skill from './Skill';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(8),
    },
  }),
);
type Props = {
  skill: {
    id: string;
    skill: string;
    img: {
      url: string;
    };
    span: string;
  }[];
  datalist: {
    id: string;
    name: string;
    skill: string;
    text: string;
  }[];
};

const Career: React.FunctionComponent<Props> = ({ datalist, skill }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.jobtext} id="section2">
          Skill && Part-time Job
        </div>
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} />
          <Grid item xs={12} md={3}>
            <Skill skill={skill} />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className={styles.wrapmap}>
              {datalist.map((d) => (
                <div key={d.id}>
                  <div className={styles.name}>・{d.name}</div>
                  <div className={styles.text}>
                    - {d.text} [{d.skill}]
                  </div>
                  <div className={styles.spacer} />
                </div>
              ))}
            </div>
          </Grid>
          {/* </div> */}
        </Grid>
      </div>
    </>
  );
};
export default Career;
