import React, {useState} from 'react'
import './Sass/main.scss';
import {UserContext} from './UserContext';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Restroom from './Pages/Restroom';
import Notfound from './Pages/Notfound';


function App() {

	const [user, setUser] = useState(null);

	return (
		<Router>
			<UserContext.Provider value={{user,setUser}}>
				<Switch>
					<Route exact path="/login" component={Login}></Route>
					<Route exact path="/" component={Home}></Route>
					<Route exact path="/signup" component={Signup}></Route>
          			<Route exact path="/restrooms/:id" component={Restroom}></Route>
					<Route exact component={Notfound}/>
				</Switch>
			</UserContext.Provider>
		</Router>
	);
}

export default App;
