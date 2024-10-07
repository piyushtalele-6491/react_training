import React from "react";
import ReactDOM from "react-dom";
/**
 *
 * <div id="parent">
 * <div id="child">
 *  <h1 id="heading_1">Hello World from React</h1>
 * <h2 id="heading_2">Hello World from React</h2>
 * </div>
 * </div>
 *
 */

const heading_1 = React.createElement(
  "h1",
  { id: "heading_1", xyz: "abc" },
  "This is Heading 1"
);
const heading_2 = React.createElement(
  "h1",
  { id: "heading_2", xyz: "abc" },
  "This is Heading 1"
);
const child_1 = React.createElement("div", { id: "child_1" }, [
  heading_1,
  heading_2,
]);

const child_2 = React.createElement("div", { id: "child_2" }, [
  heading_1,
  heading_2,
]);

const parent = React.createElement("div", { id: "parent" }, [child_1, child_2]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
