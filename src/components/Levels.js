import React, {Component} from 'react';
import { View,
         Text,
         ScrollView, 
         Switch, 
         ImageBackground,
         FlatList,
         Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

import Data from '../../assets/data.json';

import DataAcertijos from '../../assets/adivinanzas.json';
import DataMarcas from '../../assets/marcas.json';
import DataQuestions from '../../assets/questions.json';
import DataLogos from '../../assets/marcas.json';

import { adivinanzas } from '../imageComponent/adivinanzas.js';
import { logos } from '../imageComponent/logos.js';
import { imagesPeliculas } from '../imageComponent/peliculas.js';
import { imagesFamosos } from '../imageComponent/famosos.js';
import { imagesEmojis } from '../imageComponent/emojis.js';
import { imagesEscudos } from '../imageComponent/escudos.js';
import { imagesSombras } from '../imageComponent/sombras.js';
import { imagesAleatorio } from '../imageComponent/aleatorio.js';

let imageCategory, DataCategory;
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
	
	toggleSwitch1 = (value) => {
      this.setState({ switchState: value })
      console.log(value);
    }

	render() {
		if (this.props.category == 'acertijos') {
			imageCategory = adivinanzas;
			DataCategory = DataAcertijos;
		} else if (this.props.category == 'logos') {
			imageCategory = logos;
			DataCategory = DataLogos;
		} else if (this.props.category == 'logos') {
			imageCategory = logos;
			DataCategory = DataLogos;
		}

		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return(
			<View style={styles.containerSectionStyle}>
				<View style={styles.headerContainer}>
					<Text style={styles.headerTitle}>Elige el nivel</Text>
				</View>
                <ScrollView>
                    <FlatList
                        data={DataCategory.listado}
						numColumns={4}
                        keyExtractor={item => item.respuesta}
						renderItem={({item, index}) =>
							<ImageBackground key={index} 
									style={styles.circle}
									source={imageCategory(index+1)}>
                                <Text style={styles.textCircle} onPress={() => Actions.guess({level: index+1, respuesta: item})}>{index+1}</Text>
                            </ImageBackground>
                        }
                    />
                </ScrollView>
				<View style={styles.footerContainer}>
					<Text style={styles.footerText}>Español</Text>
					<Switch
                      thumbTintColor="#ffffff"
                      tintColor="#cccccc"
                      onTintColor="#cccccc"
					  onValueChange={this.toggleSwitch1.bind(this)} 
					  value={ this.state.switchState } 
					/>
		            <Text style={styles.footerText}>English</Text>
				</View>
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
    	backgroundColor: '#cb4e48',
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
    circle: {
		width: half_width,
		height: half_width,
		borderWidth: 0.7,
    	borderColor: '#000'
    },
    textCircle: {
    	fontFamily: 'lobster',
    	fontSize: 16,
    	color: '#000',
        textAlign: 'left'
    },
    footerContainer: {
		backgroundColor: '#cb4e48',
    	alignSelf: 'stretch',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	height: 60,
    	padding: 10
    },
    footerText: {
    	color: 'white',
    	fontSize: 20
    }
};

export default Levels;
