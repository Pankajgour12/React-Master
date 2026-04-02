
      const parent = React.createElement("div",{id:'parent'},[
        React.createElement("div",{id:'child'},[
              React.createElement("h1",{},"This is h1 in child"),
              React.createElement("h2",{},"This is h2 in child")

        ]),
         React.createElement("div",{id:'child2'},[
              React.createElement("h1",{},"This is h1 in child 2"),
              React.createElement("h2",{},"This is h2 in child 2")

        ])
]


      )


      console.log(parent);

      const root = ReactDOM.createRoot(document.getElementById("root"));

      root.render(parent);
    