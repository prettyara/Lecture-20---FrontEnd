// membuat objek
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
			
// create main class
class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<ReactRouterDOM.HashRouter>
			    <div className="App">
					<ul className="App-header">
						<li> <Link to="/">Home</Link> </li>
						<li> <Link to="/project">Project</Link> </li>
						<li> <Link to="/personal information">PersonalInformation</Link> </li>
						<li> <Link to="/information center">Information Center</Link> </li>
						<li> <Link to="/statistic">Statistic</Link> </li>
						<li> <Link to="/help">Help</Link> </li>
						<li> <Link to="/about">About Us</Link> </li>
						<li> <Link to="/contact">Contact Us</Link> </li>
					</ul>
			   
					<Route path="/" exact component={Home} />
					<Route path="/project" component={Project} />
					<Route path="/personal information" component={PersonalInformation} />
					<Route path="/information center" component={InformationCenter} />
					<Route path="/statistic" component={Statistic} />
					<Route path="/help" component={Help} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
			    </div>
		    </ReactRouterDOM.HashRouter>
		);
	}
}

// render komponen ke RealDOM
ReactDOM.render(<App />, document.getElementById("app"));