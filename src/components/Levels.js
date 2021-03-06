import React, {Component} from 'react';
import { View,
         Text,
         ScrollView, 
         Switch, 
         ImageBackground,
         FlatList,
		 Dimensions,
		 Image,
		 TouchableHighlight,
		 ActivityIndicator
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

var imageCategory;
var { width } = Dimensions.get('window');
var half_width = width/4;

class Levels extends Component {
	constructor(props){
		super(props);
    }

    state = {
        isReady: false,
        switchState: true,
        showLoader: true,
        levelReached: '',
        dataCategory: '',
    }

    componentDidMount() {
        this.setData();
    }
    
	async componentWillMount() {
		await Font.loadAsync({
			'lobster' : require('../../assets/fonts/lobster-two.italic.ttf')
		});
        this.setState({ isReady: true });
	}

    componentWillReceiveProps(nextProps) {
        if (this.state.levelReached !== nextProps.levelReached) {
            this.setState({ levelReached: nextProps.levelReached });
            this.setData();
        }
    }
    /**
     * seteo la imagen y la palabra a adivinar basado en la categoria
     * */
    setData() {
        if (this.props.category == CONST.CATEGORY.ADIVINANZAS) {
            imageCategory = adivinanzas;
            this.setState({ dataCategory: DataAcertijos });
        } else if (this.props.category == CONST.CATEGORY.LOGOS) {
            imageCategory = logos;
            this.setState({ dataCategory: DataLogos });
        } else if (this.props.category == CONST.CATEGORY.PELICULAS) {
            imageCategory = peliculas;
            this.setState({ dataCategory: DataPeliculas });
        } else if (this.props.category == CONST.CATEGORY.FAMOSOS) {
            imageCategory = famosos;
            this.setState({ dataCategory: DataFamosos });
        } else if (this.props.category == CONST.CATEGORY.EMOJIS) {
            imageCategory = emojis;
            this.setState({ dataCategory: DataEmojis });
        } else if (this.props.category == CONST.CATEGORY.ESCUDOS) {
            imageCategory = escudos;
            this.setState({ dataCategory: DataEscudos });
        } else if (this.props.category == CONST.CATEGORY.SOMBRAS) {
            imageCategory = sombras;
            this.setState({ dataCategory: DataSombras });
        }
    }

    render() {
        let list= this.state.dataCategory;
		setTimeout(() => {
            this.setState({ showLoader: false });
        }, list.length * 25);
        console.log(list.length)

		if (!this.state.isReady) {
			return <AppLoading />;
		}
		return(
			<View style={styles.containerSectionStyle}>
				<View style={styles.headerContainer}>
					<TouchableHighlight style={styles.arrowBackContainer} onPress={() => Actions.categories({levelReached: this.state.levelReached, category: this.props.category})}>
						<Image style={styles.arrowBack} source={require('../../assets/img/arrowback.png')} />
					</TouchableHighlight>
					<Text style={styles.headerTitle}>Elige el nivel</Text>
				</View>
				{this.state.showLoader && <ActivityIndicator style={styles.spinner} size={80} color="#000000" />}
				<FlatList
                    data={this.state.dataCategory.listado}
                    numColumns={4}
                    keyExtractor={item => item.respuesta}
                    renderItem={({ item, index }) => (
                        <TouchableHighlight
                            style={styles.levelContainer}
                            onPress={() => (index + 1 <= this.props.level) ? Actions.guess({ image_to_guess: { level: index + 1, answer: item, category: this.props.category } }):""}>
                            <ImageBackground key={index}
                                style={(index + 1 <= this.props.level) ? styles.level : styles.levelOff}
                                source={imageCategory(index + 1)}>
                                <Text style={styles.textLevel}>{index + 1}</Text>
                            </ImageBackground>
                        </TouchableHighlight>
                            
                    )}
                />
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
	spinner: {
		zIndex: 1,
		position: 'absolute',
		top: '50%',
		marginTop: -50,
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
    levelOff: {
        width: half_width,
        height: half_width,
        opacity: .5,
        backgroundColor: '#000',
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
