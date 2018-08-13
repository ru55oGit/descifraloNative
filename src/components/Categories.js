import React, { Component } from 'react';
import { 
    View,
    Text,
    ScrollView,
    Image,
    Dimensions,
    Switch,
    Platform,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

import Data from '../../assets/adivinanzas.json';

var { width } = Dimensions.get('window');
var half_width = width/2;
const aleaImg = Data.listado[1].pathImg;


class Categories extends Component {
    state = {
        isReady: false,
        rand: 1
    }
    
    async componentWillMount() {
        await Font.loadAsync({
            'lobster' : require ('../../assets/fonts/lobster-two.italic.ttf')
        });
        
        this.setState({isReady: true});
    }
    
    toggleSwitch1 = (value) => {
        this.setState({ switchState: value })
        console.log(value);
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
                <Text>{Data.listado[1].pathImg}</Text>
                <ScrollView>
                    <View style={styles.rowContainer}>
                        <Image
                            style={style.img}
                            source={require('../../assets/img/aleatorio1.jpg')} />
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_aleatorio.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_acertijos.jpg')} />
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/acertijos/adivinanzas'+20+'.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/logos/marcas1.jpg')} />
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_logos.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_peliculas.jpg')} />
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/peliculas/peliculas1.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/comosellama/comosellama1.jpg')} />
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_comosellama.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_emojis.jpg')} />
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/emojis/emojis1.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/escudos/escudos1.jpg')} />
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_logosdeportes.jpg')} />
                    </View>
                    <View style={styles.rowContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/cat_shadows.jpg')} />
                        <Image 
                            style={styles.img}
                            source={require('../../assets/img/sombras/shadows1.jpg')} />
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

export default Categories;