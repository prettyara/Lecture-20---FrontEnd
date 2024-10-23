// Dashboard component
const Link = ReactRouterDOM.Link;
class DashboardPage extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
        <header style={{ backgroundColor: "#4CAF50", padding: "10px", color: "white", textAlign: "center" }}>
          <h1>Front End Web Development</h1>
        </header>
        <div style={{ flex: "1", display: "flex" }}>
          <aside style={{ width: "200px", backgroundColor: "#ccc", padding: "10px" }}>
            <h2>Sidebar</h2>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/statistics">Statistics</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/contacts">Contacts</Link></li>
            </ul>
          </aside>
          <main style={{ flex: "1", padding: "20px" }}>
            <h2>Welcome to the Dashboard!</h2>
            <Route path="/home" component={Home}/>
            <Route path="/statistics" component={Statistics}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/help" component={Help}/>
            <Route path="/contacts" component={Contacts}/>
          </main>
        </div>
        <footer style={{ backgroundColor: "#4CAF50", padding: "10px", color: "white", textAlign: "center" }}>
          <p>2024@Universitas Klabat</p>
        </footer>
      </div>
    );
  }
}