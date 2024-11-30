const element = React.createElement(
  "h1",
  {
    className: "text-bold",
  },
  "Hello",
);

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(element);
