//ReactDOM.render(<h1> Hello Yong !</h1>, document.getElementById("root"));

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

function Navbar() {
    return (
        <div class="navbar">
            <div class="navbar-inner">
                <a class="brand" href="#">Title</a>
                <ul class="nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                </ul>
            </div>
         </div>
    )
}
ReactDOM.render(
    <div>
        <ul>
            <li>Thing 1</li>
            <li>Thing 2</li>
        </ul>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
);
