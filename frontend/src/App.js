import React from 'react'
import './Sass/main.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './Pages/Login';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={Login}></Route>
			</Switch>
		</Router>
	);
}

export default App;
