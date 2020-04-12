import React from "react";
const Hello = () => {
  return (
    <div className="hero">
      <h1>Hello Anurag</h1>
    </div>
  );
};
// const Hello = () => {
//   return React.createElement(
//     "div",
//     {
//       id: "hello",
//       className: "hero",
//     },
//     React.createElement("h1", null, "Hello Anurag")
//   );
// };
export { Hello as default };
