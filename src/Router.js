import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Splash from './components/Splash';
import Levels from './components/Levels';
import GuessImage from './components/GuessImage';
import Categories from './components/Categories';

const RouterComponent = (props) => {
    return (
        <Router sceneStyle={{ paddingTop: 15 }}>
            <Scene hideNavBar={true}>
                <Scene key="splash" component={Splash} hideNavBar={true} />
                <Scene key="game_bucket" >
                    <Scene key="categories" component={Categories} hideNavBar={true} />
                    <Scene key="levels" component={Levels} hideNavBar={true} handleClick={props.level}  />
                    <Scene key="guess" component={GuessImage} hideNavBar={true} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;