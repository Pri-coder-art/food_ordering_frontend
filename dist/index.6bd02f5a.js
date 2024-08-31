// import React from "react";
// const heading=React.createElement(
// "h1",
// {id:"headings"},
// "hello world from react"
// )
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hello world"),
        React.createElement("h2", {}, "hello world")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hello world"),
        React.createElement("h2", {}, "hello world")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
