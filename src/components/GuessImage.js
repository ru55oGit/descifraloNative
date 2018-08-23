import React, { Component }  from 'react';
import { 
	View, 
	Text,
    TouchableHighlight,
    Dimensions,
	Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import CONST from '../../global-config'

var { width } = Dimensions.get('window');
var full_width = width;
var third_width = width / 3;
var fourth_width = width / 4;

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
	
	wordToGuess2(str) {
        word = str.split("");
        return word.map((key, idx) => {
            <Text id={idx} style={{ borderWidth: 2, borderColor: '#000', borderRadius: 5, width: 25, height: 25, backgroundColor: '#fff', marginRight: 1 }}>{key}</Text>
        });
	}

	wordToGuess(str) {
		answer = str.split("|");
		answer.forEach((key, i) => {
			console.log('key: ', key, ' id: ', i)
            word = answer[i].split("");
            <View style={{ flexDirection: 'row' }}>
                return answer.forEach((key, i) => {
                     <Text style={{ borderWidth: 2, borderColor: '#000', borderRadius: 5, width: 23, height: 23, backgroundColor: '#fff', marginRight: 1 }}></Text>
                });
            </View>
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
                <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 2, height: 30, width: third_width*2, backgroundColor: 'yellow' }}>
                    {this.wordToGuess2(this.props.image_to_guess.answer.respuesta)}
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
		flex: 1.5,
    },
	closeContainer: {
		position: 'absolute',
		left: 5,
		top: 8,
		width: full_width * 0.15,
        height: full_width * 0.15,
	},
	close: {
        width: full_width * 0.15,
        height: full_width * 0.15,
	},
    headerTitle: {
        width: '75%',
		height: '40%',
		top: 15,
        position: 'relative',
        resizeMode: 'contain',
	},
	clock: {
        width: full_width * 0.18,
        height: full_width * 0.18,
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
        width: third_width*2,
        height: third_width*2,
		borderWidth: 7,
        borderColor: '#000',
	}
};

export default GuessImage;