import React, {Component} from 'react';
import { View,
         Text,
         ScrollView, 
         Switch, 
         ImageBackground,
         FlatList,
		 Dimensions,
		 Image,
		 TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

import CONST from '../../global-config'

import DataAcertijos from '../../assets/adivinanzas.json';
import DataBanderas from '../../assets/banderas.json';
import DataFamosos from '../../assets/famosos.json';
import DataEmojis from '../../assets/emojis.json';
import DataEscudos from '../../assets/escudos.json';
import DataLogos from '../../assets/marcas.json';
import DataPeliculas from '../../assets/peliculas.json';
import DataSombras from '../../assets/sombras.json';

import { adivinanzas } from '../imageComponent/adivinanzas.js';
import { logos } from '../imageComponent/logos.js';
import { peliculas } from '../imageComponent/peliculas.js';
import { famosos } from '../imageComponent/famosos.js';
import { emojis } from '../imageComponent/emojis.js';
import { escudos } from '../imageComponent/escudos.js';
import { sombras } from '../imageComponent/sombras.js';
import { aleatorio } from '../imageComponent/aleatorio.js';

var imageCategory, DataCategory;
var { width } = Dimensions.get('window');
var half_width = width/4;


class Levels extends Component {
	state = {
		isReady: false,
		switchState: true
	};

	async componentWillMount() {
		await Font.loadAsync({
			'lobster' : require('../../assets/fonts/lobster-two.italic.ttf')
		});

		this.setState({isReady: true});
	}
	
	render() {
		if (this.props.category == CONST.CATEGORY.ADIVINANZAS) {
			imageCategory = adivinanzas;
			DataCategory = DataAcertijos;
		} else if (this.props.category == CONST.CATEGORY.LOGOS) {
			imageCategory = logos;
			DataCategory = DataLogos;
		} else if (this.props.category == CONST.CATEGORY.PELICULAS) {
			imageCategory = peliculas;
			DataCategory = DataPeliculas;
		} else if (this.props.category == CONST.CATEGORY.FAMOSOS) {
			imageCategory = famosos;
			DataCategory = DataFamosos;
		} else if (this.props.category == CONST.CATEGORY.EMOJIS) {
			imageCategory = emojis;
			DataCategory = DataEmojis;
		} else if (this.props.category == CONST.CATEGORY.ESCUDOS) {
			imageCategory = escudos;
			DataCategory = DataEscudos;
		} else if (this.props.category == CONST.CATEGORY.SOMBRAS) {
			imageCategory = sombras;
			DataCategory = DataSombras;
		}

		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return(
			<View style={styles.containerSectionStyle}>
				<View style={styles.headerContainer}>
					<TouchableHighlight style={styles.arrowBackContainer} onPress={() => Actions.pop()}>
						<Image style={styles.arrowBack} source={require('../../assets/img/arrowback.png')} />
					</TouchableHighlight>
					<Text style={styles.headerTitle}>Elige el nivel</Text>
				</View>
                <ScrollView>
                    <FlatList
                        data={DataCategory.listado}
						numColumns={4}
                        keyExtractor={item => item.respuesta}
						renderItem={({item, index}) =>
							<TouchableHighlight
								style={styles.levelContainer}
								onPress={() => Actions.guess({image_to_guess:{level: index+1, answer: item, category: this.props.category}})}>
								<ImageBackground key={index} 
										style={styles.level}
										source={imageCategory(index+1)}>
									<Text style={styles.textLevel}>{index+1}</Text>
								</ImageBackground>
							</TouchableHighlight>
                        }
                    />
                </ScrollView>
			</View>
		);
	}
}

const styles = {
	containerSectionStyle: {
       	flex: 1,
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    headerContainer: {
    	backgroundColor: CONST.COLOR.BACKGROUND_SPANISH,
    	alignSelf: 'stretch',
    	justifyContent: 'center',
    	alignItems: 'center',
    	height: 60,
    },
    headerTitle: {
    	fontFamily: 'lobster',
    	color: 'white',
    	flexDirection: 'column',
    	fontSize: 40
    },
    mainContainer: {
    	backgroundColor: '#fff',
    	alignSelf: 'stretch',
    	alignItems: 'center',
    	flexDirection: 'row',
    },
    flatListStyles: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
	},
	levelContainer: {
		width: half_width,
		height: half_width,
		borderWidth: 1,
		borderColor: '#000',
    },
    level: {
		width: half_width,
		height: half_width,
    },
    textLevel: {
    	fontFamily: 'lobster',
    	fontSize: 16,
    	color: '#000',
        textAlign: 'left'
	},
	arrowBackContainer: {
		position: 'absolute',
		left: 5,
		width: 50,
		height: 50
	},
	arrowBack: {
		width: 50,
		height: 50
	},
};

export default Levels;
