import React, { Component } from 'react';
import { View, 
		 StatusBar, 
		 Image, 
		 TouchableWithoutFeedback
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {
	constructor(props){
		super(props);
	}

	state = {
		showClover: 5
	}

	componentDidMount() {
		this.clearClover = setInterval(this.timer.bind(this), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.clearClover);
	}

	timer() {
		this.setState({showClover: this.state.showClover-1});
		if (this.state.showClover < 1) {
			this.setState({showClover: 1});
			clearInterval(this.clearClover);
			Actions.game_bucket();
		}
	}

	render() {
		return(
			<View style={styles.containerSectionStyle}>
				<StatusBar hidden={true} />
				<TouchableWithoutFeedback style={styles.luckypalm} onPress={() => Actions.game_bucket()}>
					<Image source={require('../../assets/img/luckypalm1.png')} />
				</TouchableWithoutFeedback>
				<Image style={this.state.showClover == 5? styles.trebol : styles.hidden} source={require('../../assets/img/clover5.png')} />
				<Image style={this.state.showClover == 4? styles.trebol : styles.hidden} source={require('../../assets/img/clover4.png')} />
				<Image style={this.state.showClover == 3? styles.trebol : styles.hidden} source={require('../../assets/img/clover3.png')} />
				<Image style={this.state.showClover == 2? styles.trebol : styles.hidden} source={require('../../assets/img/clover2.png')} />
				<Image style={this.state.showClover == 1? styles.trebol : styles.hidden} source={require('../../assets/img/clover1.png')} />
			</View>
		);
	}
};

const styles = {
	containerSectionStyle: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 200,
	},
	luckypalm: {
		position: 'relative'
	},
	hidden: {
		display: 'none',
	},
	trebol: {
		position: 'absolute',
		width: 38,
		height: 56,
		top: 85,
		resizeMode: 'contain',
	}
};

export default Splash;