import styles from './About.module.css'
import Image from 'next/image'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import dataset  from "../assets/data.json"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(8),
        },
    }),
);

const corpdatas = dataset;

export const AboutMe: React.FunctionComponent = () => {
    const classes = useStyles();
    // const url =  `${process.env.PUBLIC_URL}`
    // // console.log(url)
    return(
        <div className={styles.wrapper}>
            <h1>About me</h1>
            <div className={styles.layout}>
                <div className={styles.icon}>
                    <Image src="/myicon.png" width={300} height={300} className={styles.circle}/>
                    <div className={styles.text}>sugar</div>
                    <div>
                        <a href="https://twitter.com/sugar235711">
                            <Image src="/twitter.png" width={50} height={50} className={styles.circle}/>
                        </a>
                        <span className={styles.spacer}/>            
                        <a href="https://github.com/toshikingggg">
                        <Image src="/github.png" width={50} height={50} className={styles.circle}/>
                        </a>
                    </div>
                </div>
                <div className={styles.profile}>
                    <div className={styles.spacer}/>
                    <Paper elevation={3} className={styles.profile_c}>{corpdatas.profile}</Paper>
                    <div>使用可能な技術</div>
                    <Image src="p_icon.png" width={500} height={150}/>
                </div>            
            </div>
            <h1>Career</h1>
            {corpdatas.datalist.map((corpdata) => 
                (
                    <>
                        <div className={styles.corp}>
                            <div>
                                <Image src= {corpdata.image} width={120} height={120} className={styles.corpicon}/>
                                <div>{corpdata.term}</div>
                            </div>
                            <Paper elevation={3} className={styles.corptext}>
                                {corpdatas.text[corpdata.id]}({corpdata.skill})
                            </Paper>
                        </div>
                    </>
            ))}
            <Button variant="outlined" color="primary" className={classes.button}　size="large" >
                お問い合わせ
            </Button>
        </div>
    )
}