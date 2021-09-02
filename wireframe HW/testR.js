
// clsss Componet
class App extends React.Component{
    //render method
    render(){
        return ( <div className ="test">
            
            <NavBar />

            <h1>Hello World!!</h1>
            <p>This is my website</p>
            <p>Using React</p>

            <Paragraph />

            <Paragraph />

            <Paragraph />
            
            <Footer />

        </div>
        )
    }

}

class Paragraph extends React.Component{
    render(){
        return (
            <p>
                <h1>Life with Sil</h1>
                <h2>Travel</h2>
                <h2>Eating</h2>

            </p>
        )
    }
}

class NavBar extends React.Component{
    render(){
        return (
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Profile</li>
                <li>Other</li>
            </ul>
        )
    }
}

class Footer extends React.Component{
    render(){
        return (
            <ul>
                <li>Contact</li>
                <li>Terms and Services</li>
                <li>Social Media</li>
                <li>Careers</li>
            </ul>
        )
    }
}



// first argument: what we want to display (elements etc)
//second argument: where we want to disolay it


ReactDOM.render(
    <App />, 
    document.getElementById('root')
    )

