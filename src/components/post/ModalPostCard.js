import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import TagChips from './TagChips';

// Styling
const useStyles = makeStyles({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  root: {
    maxWidth: 1000,
    maxHeight: '90vh'
  },
  caption: {
    maxheight: '30vh',
    minHeight: '3rem',
    zIndex: '20',
    bottomMargin: 0
  }
});

// Helper method
const arrayToChipData = (array) => {
  let output = [];
  array.forEach(function (tagString) {
    output.push({ key: array.indexOf(tagString), label: tagString });
  });
  return output;
};

const ModalPostCard = ({ postContent, handleModalChange }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} onClick={handleModalChange}>
      <Card className={classes.root} onclick={(e) => e.preventDefault()}>
        <CardActionArea onclick={(e) => e.preventDefault()}>
          <Box
            style={{
              height: '50vh',
              backgroundColor: 'black',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <img
              src={postContent.images[0]}
              style={{ height: '100%' }}
              alt={postContent.caption}
            />
          </Box>
          <CardContent className={classes.caption}>
            {postContent.tags && (
              <TagChips tagsArray={arrayToChipData(postContent.tags)} />
            )}
            <Typography>{postContent.displayName}</Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {postContent.caption}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ModalPostCard;