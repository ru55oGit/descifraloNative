import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import Home from './components/Home';

const RouterComponent = () => {
	return (
		<Router>
	        <Scene key="splash" component={Splash} hideNavBar={true} sceneStyle={{ paddingTop: 30 }}/>
	        <Scene key="home_bucket" >
	        	<Scene key="home" component={Home} hideNavBar={true} sceneStyle={{ paddingTop: 30 }}/>
	        </Scene>
		</Router>
	);
};

export default RouterComponent;
