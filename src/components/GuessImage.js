import React, { Component }  from 'react';
import { 
	View, 
	Text,
	TouchableHighlight,
	Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import CONST from '../../global-config'



class GuessImage extends Component {
	constructor(props){
	  super(props);
	}
	render(){
		return(
			<View style={styles.containerSectionStyle}>
				<View style={styles.headerContainer}>
					<TouchableHighlight style={styles.closeContainer} onPress={() => Actions.pop()}>
						<Image style={styles.close} source={require('../../assets/img/cerrar.png')} />
					</TouchableHighlight>
					<Image style={styles.headerTitle} source={require('../../assets/img/descifralo_title.png')} />
					<Image style={styles.clock} source={require('../../assets/img/chrono.png')} />
				</View>
				<View style={styles.imageContainer}>
					<Text>Nivel  {this.props.image_to_guess.level}</Text>
					<Text>{this.props.image_to_guess.answer.respuesta}</Text>
				</View>
			</View>
		);
	}
};

const styles = {
	containerSectionStyle: {
		flex: 1,
        alignItems:'center',
		backgroundColor: CONST.COLOR.BACKGROUND_SPANISH
	},
	headerContainer: {
		alignSelf: 'stretch',
		alignItems:'center',
		height: 60,
		flex: 2,
    },
	closeContainer: {
		position: 'absolute',
		left: 5,
		top: 8,
		width: 60,
		height: 60
	},
	close: {
		width: 60,
		height: 60
	},
	headerTitle: {
		width: 180,
		height: 45,
		top: 15,
		position: 'relative',
	},
	clock: {
		width: 60,
		height: 60,
		position: 'absolute',
		right: 8,
		top: 8,
		transform: [{ rotate: '20deg'}],
	},
	imageContainer: {
		flex: 9,
	}
};

export default GuessImage;