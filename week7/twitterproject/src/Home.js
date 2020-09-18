import React, {Component} from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            loggedIn: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name=target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="homeText">
             <h2>See what's happening in the world right now</h2>
            <h4>Log in to Twitter today.</h4>
            <form>
                <label>
                    UserName:
                    <input
                        name= "loggedIn"
                        className="userNameInput"
                        type= "text"
                        checked={this.state.loggedIn}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Password: 
                    <input
                        name="password"
                        className="passwordInput"
                        type="text"
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <button type="submit" className="btn" onClick={(e) => this.handleClick(e)}>Submit</button>

            </form>
            </div>
        )
    }
}

export default Home