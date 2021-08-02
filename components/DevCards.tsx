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
    maxWidth: '300px',
    textAlign: 'center',
    margin: '0 auto',
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
    <div className={styles.container}>
      <div className={styles.text}>Products</div>
      <div className={styles.wrapper}>
        {devDatas.map((devData: Datas) => (
          <div className={styles.wrapperInner}>
            <Card className={classes.root} id="section1">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={devData.url}
                  height="300px"
                  width="300px"
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
