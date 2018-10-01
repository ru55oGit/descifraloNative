import React, { Component } from 'react';
import { 
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    Switch,
    TouchableHighlight,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

import CONST from '../../global-config';

import { adivinanzas } from '../imageComponent/adivinanzas.js';
import { logos } from '../imageComponent/logos.js';
import { peliculas } from '../imageComponent/peliculas.js';
import { famosos } from '../imageComponent/famosos.js';
import { emojis } from '../imageComponent/emojis.js';
import { escudos } from '../imageComponent/escudos.js';
import { sombras } from '../imageComponent/sombras.js';
import { aleatorio } from '../imageComponent/aleatorio.js';

var { width } = Dimensions.get('window');
var half_width = width/2;

class Categories extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        levelReached: '',
        isReady: false,
        levelAcertijos: 1,
        levelLogos: 1,
        levelPeliculas: 1,
        levelFamosos: 1,
        levelEmojis: 1,
        levelEscudos: 1,
        levelSombras: 1
    }
    constructor(props){
        super(props);
    }
    
    async componentWillMount() {
        await Font.loadAsync({
            'lobster' : require ('../../assets/fonts/lobster-two.italic.ttf')
        });
        
        this.setState({isReady: true});
        this.setLevelByCategory(CONST.LEVEL_SELECTED.ADIVINANZAS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.LOGOS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.PELICULAS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.FAMOSOS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.EMOJIS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.ESCUDOS);
        this.setLevelByCategory(CONST.LEVEL_SELECTED.SOMBRAS);
    }
    
    componentWillReceiveProps(nextProps){
        if (this.state.levelReached !== nextProps.levelReached) {
            this.updateLevelByCategory(nextProps.category, nextProps.levelReached);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        return this.props.reload;
    }


    // Cuando hago back, agarro los props y seteo el nuevo state
    updateLevelByCategory(category, level) {
        if (category == CONST.CATEGORY.ADIVINANZAS) {
            this.setState({levelAcertijos: level});
        } else if (category == CONST.CATEGORY.LOGOS) {
            this.setState({levelLogos: level});
        } else if (category == CONST.CATEGORY.PELICULAS) {
            this.setState({levelPeliculas: level});
        } else if (category == CONST.CATEGORY.FAMOSOS) {
            this.setState({levelFamosos: level});
        } else if (category == CONST.CATEGORY.EMOJIS) {
            this.setState({levelEmojis: level});
        } else if (category == CONST.CATEGORY.ESCUDOS) {
            this.setState({levelEscudos: level});
        }  else if (category == CONST.CATEGORY.SOMBRAS) {
            this.setState({levelSombras: level});
        }
    }
    // Cuando se monta el componente, consulto el AsyncStorage 
    // y traigo el nivel guardado
    setLevelByCategory(key) {
        try {
            AsyncStorage.getItem(key).then((result) => {
                if (result) {
                    result = JSON.parse(result);
                } else {
                    result = 1;
                }
                if (key == CONST.LEVEL_SELECTED.ADIVINANZAS) {
                    this.setState({levelAcertijos: result});
                } else if (key == CONST.LEVEL_SELECTED.LOGOS) {
                    this.setState({levelLogos: result});
                } else if (key == CONST.LEVEL_SELECTED.PELICULAS) {
                    this.setState({levelPeliculas: result});
                } else if (key == CONST.LEVEL_SELECTED.FAMOSOS) {
                    this.setState({levelFamosos: result});
                } else if (key == CONST.LEVEL_SELECTED.EMOJIS) {
                    this.setState({levelEmojis: result});
                } else if (key == CONST.LEVEL_SELECTED.ESCUDOS) {
                    this.setState({levelEscudos: result});
                }  else if (key == CONST.LEVEL_SELECTED.SOMBRAS) {
                    this.setState({levelSombras: result});
                }
            }).done();
        } catch (e) {
            //console.log("error",e)
        }
    }

    toggleSwitch1 = (value) => {
        this.setState({ switchState: value })
    }
    
    render() {
        if (!this.state.isReady) {
            return <AppLoading />
        }
        return(
            <View style={styles.containerSectionStyle}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>Elige una categoría</Text>
                </View>
                <ScrollView>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={aleatorio(Math.floor(Math.random() * (10 - 1)) + 1)} />
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_aleatorio.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_acertijos.jpg')} />
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelAcertijos, category: CONST.CATEGORY.ADIVINANZAS}) }>
                            <Image 
                                style={styles.img}
                                source={adivinanzas(this.state.levelAcertijos)} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelLogos, category: CONST.CATEGORY.LOGOS}) }>
                            <Image 
                                style={styles.img}
                                source={logos(this.state.levelLogos)} />
                        </TouchableHighlight>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_logos.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_peliculas.jpg')} />
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelPeliculas, category: CONST.CATEGORY.PELICULAS}) }>
                            <Image 
                                style={styles.img}
                                source={peliculas(this.state.levelPeliculas)} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelFamosos, category: CONST.CATEGORY.FAMOSOS}) }>
                            <Image 
                                style={styles.img}
                                source={famosos(this.state.levelFamosos)} />
                        </TouchableHighlight>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_comosellama.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_emojis.jpg')} />
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelEmojis, category: CONST.CATEGORY.EMOJIS}) }>
                            <Image 
                            style={styles.img}
                            source={emojis(this.state.levelEmojis)} />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowContainer}>
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelEscudos, category: CONST.CATEGORY.ESCUDOS}) }>
                            <Image 
                                style={styles.img}
                                source={escudos(this.state.levelEscudos)} />
                        </TouchableHighlight>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_logosdeportes.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_shadows.jpg')} />
                        <TouchableHighlight
                            onPress={() => Actions.levels({level: this.state.levelSombras, category: CONST.CATEGORY.SOMBRAS}) }>
                            <Image 
                                style={styles.img}
                                source={sombras(this.state.levelSombras)} />
                        </TouchableHighlight>
                    </View>
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
        backgroundColor: CONST.COLOR.BACKGROUND_ENGLISH,
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
    scrollContainer:{

    },
    rowContainer:{
        flexDirection: 'row',
        backgroundColor: 'grey',
    },
    img:{
        width: half_width,
        height: half_width,
    },
    footerContainer: {
        backgroundColor: CONST.COLOR.BACKGROUND_ENGLISH,
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

export default Categories;