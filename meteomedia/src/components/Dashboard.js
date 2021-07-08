import  { React, Component } from "react";
import { logout, isLogin } from "../utils";
import { Link } from 'react-router-dom';


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: true
        })
    }

    render() {
        return (
            <div>
                <h1>Météo</h1>
                { 
                    <Link><button onClick={() => this.handleLogout()}>Déconnection</button></Link>
                }
            </div>
        );
    }
}



export default Dashboard;