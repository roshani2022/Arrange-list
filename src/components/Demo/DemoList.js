import React, { useMemo } from "react";
import classes from "./DemoList.module.css";
const DemoList = (props) => {
  console.log(props)
  const { items, listOrder } = props;

  const sortedList = useMemo(() => {
    if (listOrder === "dsce") {
      return items.sort((a, b) => b - a);
    } else {
      return items.sort((a, b) => a - b);
    }
  }, [items, listOrder]);
  console.log(sortedList);
  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DemoList;
