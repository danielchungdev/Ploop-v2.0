import React, {useState} from 'react'
import './Sass/main.scss';
import {UserContext} from './UserContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup'

function App() {

	const [user, setUser] = useState(null);

	return (
		<Router>
			<Switch>
				<UserContext.Provider value={{user,setUser}}>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/signup" component={Signup}></Route>
				</UserContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
