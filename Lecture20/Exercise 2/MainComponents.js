const Route = ReactRouterDOM.Route;

"use strict";
// Main component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      token: ''
    };
  }
  
  // Handle login state
  handleLogin = (token) => {
    this.setState({ isLoggedIn: true, token: token });
  }

  render() {
    return (
      <ReactRouterDOM.HashRouter>
      <div className="App">
        {this.state.isLoggedIn ? (
          <DashboardPage />
        ) : (
          <LoginPage onLogin={this.handleLogin} />
        )}


            <Route path="/home" component={Home}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/contacts" component={Contacts}/>
        
      </div>
      </ReactRouterDOM.HashRouter>
    );
  }
}

// render elements to DOM
ReactDOM.render(<App/>, document.getElementById("app"));