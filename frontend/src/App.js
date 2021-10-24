import React from 'react'
import './Sass/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/" component={Home}></Route>
			</Switch>
		</Router>
	);
}

export default App;
