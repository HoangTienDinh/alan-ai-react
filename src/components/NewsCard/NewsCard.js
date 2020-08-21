import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const NewsCard = ({ article }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
        <div>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          ></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h2"
          ></Typography>
        </div>
        <Typography gutterButtom variant="h5"></Typography>
        <CardContent>
          <Typography
            varaint="body2"
            color="textSecondard"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary"></Button>
        <Typography variant="h5" color="textSecondary"></Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
