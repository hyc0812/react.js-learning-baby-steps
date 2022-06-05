// JSX format
/*
Challenge:
Create a navbar in JSX:
    - Use the semantic 'nav' element as the parent wrapper
    - Have an h1 element with the brand name of your website"
    - Insert an unordered list for the other nav elements
        - Inside the 'ul', have three 'li' for "Pricing", "About", "Contract"
    - Don't worry about styling yet - it will just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1> Yong's Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contract</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
);
