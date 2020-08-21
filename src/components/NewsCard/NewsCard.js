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

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={
            urlToImage ||
            "https://w0.pngwave.com/png/748/607/news-media-newspaper-advertising-information-news-icon-png-clip-art-thumbnail.png"
          }
        />
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
        <Typography  variant="h5"></Typography>
        <CardContent>
          <Typography
            varaint="body2"
            color="textSecondary"
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
