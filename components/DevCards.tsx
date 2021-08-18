import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './DevCards.module.css';

const useStyles = makeStyles({
  root: {
    width: '260px',
    height: '335px',
    textAlign: 'center',
    margin: '0 auto',
  },
  media: {
    height: '200px',
    width: '100%',
    textAlign: 'center',
  },
});

type Props = {
  devEx: {
    img: {
      url: string;
    };
    title: string;
    skill: string[];
    link: {
      GitHub: string;
      Blog?: string;
      Hackathon?: string;
    };
  }[];
};

type Data = {
  GitHub: string;
  Blog?: string;
  Hackathon?: string;
};

// const devDatas = dataset.devEx;

const ImgMediaCard: React.FunctionComponent<Props> = ({ devEx }) => {
  const classes = useStyles();
  return (
    <div className={styles.container} id="section1">
      <div className={styles.text}>Products</div>
      <div className={styles.wrapper}>
        {devEx.map((devData) => (
          <div className={styles.wrapperInner}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={devData.img.url}
                  className={classes.media}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {devData.title}
                  </Typography>
                  {devData.skill.map((d: string) => (
                    <span className={styles.cardtext}>{d}</span>
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* {Object.keys(devData.link).map((d: string) => ( */}
                {(Object.keys(devData.link).slice(1) as (keyof Data)[]).map(
                  (d) => (
                    <Button size="small" color="primary">
                      <a href={devData.link[d]}>{d}</a>
                    </Button>
                  ),
                )}
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImgMediaCard;
