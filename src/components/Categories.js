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
    state = {
        isReady: false,
        levelAcertijos: 1,
        levelLogos: 1,
        levelPeliculas: 1,
        levelFamosos: 1,
        levelEmojis: 1,
        levelEscudos: 1,
        levelSombras: 1
    }
    
    async componentWillMount() {
        await Font.loadAsync({
            'lobster' : require ('../../assets/fonts/lobster-two.italic.ttf')
        });
        
        this.setState({isReady: true});
    }

    async storeItem(key, item) {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            var jsonOfItem = await AsyncStorage.setItem("levelAcertijos", 2);
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    async retrieveItem(key) {
        try {
            const retrievedItem = await AsyncStorage.getItem("levelAcertijos");
            const item = JSON.parse(retrievedItem);
            console.log(item)
            return item;
        } catch (error) {
            console.log(error.message);
        }
        return
    }
    
    toggleSwitch1 = (value) => {
        this.setState({ switchState: value })
        console.log(value);
    }
    
    render() {
        { this.retrieveItem.bind(this) }
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