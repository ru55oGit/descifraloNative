import React, { Component }  from 'react';
import { 
	View, 
	Text,
	TouchableHighlight,
	Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import CONST from '../../global-config'

import { adivinanzas } from '../imageComponent/adivinanzas.js';
import { logos } from '../imageComponent/logos.js';
import { peliculas } from '../imageComponent/peliculas.js';
import { famosos } from '../imageComponent/famosos.js';
import { emojis } from '../imageComponent/emojis.js';
import { escudos } from '../imageComponent/escudos.js';
import { sombras } from '../imageComponent/sombras.js';
import { aleatorio } from '../imageComponent/aleatorio.js';

var imageCategory;

class GuessImage extends Component {
	constructor(props){
	  super(props);
	}
	
	wordToGues(str) {
		answer = str.split("|");
		return answer.map((key, i) => {
			word = answer[i].split(""),
			 (<View style={{flexDirection: 'row'}}>
				return answer.map(()=>{
					 <Text style={{borderWidth: 2, borderColor: '#000', borderRadius: 5, width: 23, height: 23, backgroundColor: '#fff', marginRight: 1}}></Text>
				}
			</View>)
		});
	}

	wordToGues2(str) {
		answer = str.split("|");
		answer.forEach((key, idx) => {
			console.log('key: ', key, ' idx: ', idx)
			//word = answer[i].split(""),
		});
	}

	render() {
		if (this.props.image_to_guess.category == CONST.CATEGORY.ADIVINANZAS) {
			imageCategory = adivinanzas;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.LOGOS) {
			imageCategory = logos;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.PELICULAS) {
			imageCategory = peliculas;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.FAMOSOS) {
			imageCategory = famosos;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.EMOJIS) {
			imageCategory = emojis;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.ESCUDOS) {
			imageCategory = escudos;
		} else if (this.props.image_to_guess.category == CONST.CATEGORY.SOMBRAS) {
			imageCategory = sombras;
		}
		
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
					<Image
						style={styles.imageToGuess}
						source={imageCategory(this.props.image_to_guess.level)} />
				</View>
				<View style={{flexDirection:'row', justifyContent:'center', flex: 4,}}>{this.wordToGues2(this.props.image_to_guess.answer.respuesta)}</View>
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
		flex: 1.5,
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
		width: 65,
		height: 65,
		position: 'absolute',
		right: 8,
		top: 8,
		transform: [{ rotate: '20deg'}],
	},
	imageContainer: {
		flex: 4,
		paddingBottom: 5,
	},
	imageToGuess: {
		width: 230,
		height: 230,
		borderWidth: 7,
		borderColor: '#000',
	}
};

export default GuessImage;