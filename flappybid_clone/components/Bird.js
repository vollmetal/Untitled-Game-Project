//install vs code extension to create shortcuts ES7 React reddux  ext
import Matter from "matter-js";
import { StyleSheet, View } from "react-native";

const Bird = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x; //gets the max value of x using the rectangle body
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

  const xBody = props.body.position.x - widthBody / 2; //to get the center of the body
  const yBody = props.body.position.y - heightBody / 2;

  const color = props.color;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderStyle: "solid",
        position: "absolute",
        backgroundColor: "yellow",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};
export default (world, color, pos, size) => {
  const initialBird = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Bird" }
  );
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird />,
  };
};
