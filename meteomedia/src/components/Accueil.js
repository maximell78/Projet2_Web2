import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import { Link } from 'react-router-dom';

class Accueil extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div>
                <h1>Accueil</h1>

                {this.state.isLogin ? 
                    <button onClick={() => this.handleLogout()}>Déconnection</button>
                    : <Link to="/signin"><button>Connection</button></Link>
                }
            </div>
        );
    }
}

export default Accueil;