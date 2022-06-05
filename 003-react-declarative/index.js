//ReactDOM.render(<h1> Hello Yong !</h1>, document.getElementById("root"));
/*
- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div #root
*/
const h1_1 = document.createElement("h1");
h1_1.textContent = "This is an imperative way to program!";
//h1.className = "header"

const h1_2 = document.createElement("h1");
h1_2.textContent = "This is the second h1 element";
document.getElementById("root").append(h1_1);
document.getElementById("root").append(h1_2);

