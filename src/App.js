import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const [listOrder, setListOrder] = useState("asce");

  const changeTitleHandler = useCallback(() => {
    // if(listTitle==="My List"){
    //   setListTitle("New Title");
    // }else{
    //   setListTitle("My List");
    // }
    setListTitle((prevTitle) =>
      prevTitle === "My List" ? "New List" : "My List"
    );
  }, []);

  const ChangeToDescendingOrder = () => {
    if (listOrder === "asce") {
      setListOrder("dsce");
    } else {
      setListOrder("asce");
    }
  };

  const listItem = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList
        title={listTitle}
        items={listItem}
        listOrder={listOrder}
      ></DemoList>
      <div className="buttonContainer">
        <Button onClick={changeTitleHandler}>Change List Title</Button>
        <Button onClick={ChangeToDescendingOrder}>
          {listOrder === "asce"
            ? "Change to descending order"
            : "Change to ascending order"}
        </Button>
      </div>
    </div>
  );
}

export default App;
