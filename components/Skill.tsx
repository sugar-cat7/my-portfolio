import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

type Props = {
  skill: {
    id: string;
    skill: string;
    img: {
      url: string;
    };
    span: string;
  }[];
};
const FolderList: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <List>
        {props.skill.map(({ id, img, skill, span }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar src={img.url} />
            </ListItemAvatar>
            <ListItemText primary={skill} secondary={span} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
export default FolderList;
