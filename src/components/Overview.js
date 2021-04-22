// this is used for rendering our tasks
// takes the tasks as props to be passed through and rendered
import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.text}</li>; /* set key as id, needed in react */
      })}
    </ul>
  );
};

export default Overview;
