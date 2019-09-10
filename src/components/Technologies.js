import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import data from "../data/technologies.json";
import * as moment from "moment";
import Masonry from "react-masonry-component";

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class Technologies extends React.Component {
  render() {
    var sorted_items = data.sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
    const childElements = sorted_items.map(function(element) {
      return (
        <li className="image-element-class">
          <img src={element.image} />
        </li>
      );
    });

    return (
      <Masonry
        className={"my-gallery-class"} // default ''
        elementType={"ul"} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}

const useStyles = makeStyles(theme => ({
  media: {
    height: 100,
    overflow: "hidden"
  },
  card: {},
  gridItem: {
    width: 200
  }
}));

// const Technologies = () => {
//   const classes = useStyles();

//   var sorted_items = data.sort((a, b) => {
//     return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
//   });

//   return (
//     <div class="grid">
//       <div class="grid-sizer"></div>
//       <div class="gutter-sizer"></div>
//       <Cards sorted_items={sorted_items} classes={classes} />
//     </div>
//   );
// };

// const Cards = props => {
//   return props.sorted_items.map(item => {
//     return (
//       <div className={"grid-item " + item.class}>
//         <img src={item.image} />
//       </div>
//     );
//   });
// };

// const CardItem = props => {
//   return (
//     <Card className={props.classes.card}>
//       <CardHeader
//         avatar={
//           <Avatar aria-label="recipe" className={props.classes.avatar}>
//             {props.item.name.substring(0, 1)}
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={props.item.name}
//         subheader={moment(props.item.startDate).fromNow(true)}
//       />
//       <CardMedia
//         className={props.classes.media}
//         image={props.item.image}
//         title={props.item.name}
//       />
//       <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {props.item.content}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const Technologies = () => {
//   return (
//     <ul class="mdc-image-list my-image-list">
//       <ItemsList />
//     </ul>
//   );
// };

export default Technologies;
