import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import Levels from './components/Levels';
import GuessImage from './components/GuessImage';

const RouterComponent = (props) => {
	return (
		<Router>
	        <Scene key="splash" component={Splash} hideNavBar={true} sceneStyle={{ paddingTop: 30 }}/>
	        <Scene key="game_bucket" >
	        	<Scene key="levels" component={Levels} hideNavBar={true} handleClick={props.level}  sceneStyle={{ paddingTop: 30 }}/>
	        	<Scene key="guess" component={GuessImage} hideNavBar={true} sceneStyle={{ paddingTop: 30 }}/>
	        </Scene>
		</Router>
	);
};

export default RouterComponent;
