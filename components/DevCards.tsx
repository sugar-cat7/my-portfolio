import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import dataset from '../assets/data.json';
import styles from './DevCards.module.css';
const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '400px',
    textAlign: 'center',
    margin: '0 auto',
  },
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9
    height: '260px',
    width: '100%',
    // alignItems: 'center',
    textAlign: 'center',
  },
});

type Datas = {
  url: string;
  title: string;
  skill: string[];
  link: {
    GitHub: string;
    Blog?: string;
    Hackathon?: string;
  };
};

type Data = {
  GitHub: string;
  Blog?: string;
  Hackathon?: string;
};

const devDatas = dataset.devEx;

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div className={styles.container} id="section1">
      <div className={styles.text}>Products</div>
      <div className={styles.wrapper}>
        {devDatas.map((devData: Datas) => (
          <div className={styles.wrapperInner}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={devData.url}
                  className={classes.media}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {devData.title}
                  </Typography>
                  {devData.skill.map((d) => (
                    <span className={styles.cardtext}>{d}</span>
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* {Object.keys(devData.link).map((d: string) => ( */}
                {(Object.keys(devData.link) as (keyof Data)[]).map((d) => (
                  <Button size="small" color="primary">
                    <a href={devData.link[d]}>{d}</a>
                  </Button>
                ))}
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
