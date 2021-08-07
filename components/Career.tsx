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
    {/* <div className={styles.wrappercareer} id="section2">
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
    </div> */}
    <div className={styles.jobtext} id="section2">
      Part-time Job
    </div>
    <section id="conference-timeline">
      {/* <div className="timeline-start"></div> */}
      {corpdatas.datalist.map((corpdata) => (
        <>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            <div className="timeline-article">
              {corpdata.id % 2 != 0 && (
                <>
                  <div className="content-left-container">
                    {corpdata.name}
                    <div className="content-left">
                      <div>
                        {corpdatas.text[corpdata.id - 1]}
                        <div>({corpdata.skill})</div>
                      </div>
                    </div>
                  </div>
                  <div className="meta-date">
                    <span className="date">{corpdata.term}</span>
                    <span className="month">{corpdata.season}</span>
                  </div>
                </>
              )}
              {corpdata.id % 2 == 0 && (
                <>
                  <div className="content-right-container">
                    {corpdata.name}
                    <div className="content-right">
                      <div>
                        {corpdatas.text[corpdata.id - 1]}
                        <div>({corpdata.skill})</div>
                      </div>
                    </div>
                  </div>
                  <div className="meta-date">
                    <span className="date">{corpdata.term}</span>
                    <span className="month">{corpdata.season}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      ))}
      {/* <div className="timeline-end"></div> */}
    </section>
  </>
);
export default Career;
