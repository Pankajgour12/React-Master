
      const parent = React.createElement(
        "div",
        { id: "parent" },
        React.createElement("div", { id: "child" }, 
        [
          React.createElement("h1", {}, "hello I'm a React Element in h1"),
          React.createElement("h2", {}, "hello I'm a React Element in h2"),
        ]),
      );
      console.log(parent);

      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(parent);
    