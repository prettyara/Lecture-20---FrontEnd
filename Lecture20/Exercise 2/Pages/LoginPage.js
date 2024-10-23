// Login Component
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '' 
    };
  }

  // Handle state data
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, errorMessage: '' }); 
  }

  // Handle button submit
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

	// Data parameter
    const data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);

	// Request URL
    fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data.toString(),
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        this.props.onLogin(data.token); 
      } else {
        this.setState({ errorMessage: data.error || "Login failed" }); // Handle errors
      }
    })
    .catch(error => {
      this.setState({ errorMessage: "An error occurred. Please try again." }); 
    });
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f0f0" }}>
        <table style={{ border: "1px solid #ccc", backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "8px", 
						padding: "20px", width: "300px" }}>
          <tbody>
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>
                <h1>Baitanu melchris !!!</h1>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>
                <label style={{ width: "100%", display: "block" }}>Email:</label>
              </td>
              <td style={{ padding: "10px" }}>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} 
					style={{ width: "100%" }} 
                />
              </td>
            </tr>
            <tr>
              <td style={{ padding: "10px" }}>
                <label style={{ width: "100%", display: "block" }}>Password:</label>
              </td>
              <td style={{ padding: "10px" }}>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} 
                  style={{ width: "100%" }} 
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ paddingLeft: "10px", paddingRight: "2px", paddingTop: "10px" }}>
                <button type="submit" onClick={this.handleSubmit} style={{ width: "100%" }}>
                  Login Student
                </button>
              </td>
            </tr>
            {this.state.errorMessage && ( // Display error message
              <tr>
                <td colSpan="2" style={{ padding: "10px", color: "red", textAlign: "center" }}>
                  {this.state.errorMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}