import React, {Component} from 'react';
import { View,
         Text,
         ScrollView, 
         Switch, 
         ImageBackground,
         FlatList,
         ListItem
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';
import Data from '../containers/data.json';

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
                        data={Data.palabras}
                        numColumns={4}
                        style={{alignSelf: 'stretch'}}
                        keyExtractor={item => item.adivinanzas}
                        renderItem={({item, index}) => 
                            <ImageBackground key={index} 
                                   style={styles.circle}
                                   source={require('../../assets/img/selectlevelback.png')}>
                                <Text style={styles.textCircle} onPress={() => Actions.guess({level: index+1})}>{index+1}</Text>
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
    	width: 80, 
    	height: 80,
    	padding: 20,
    },
    textCircle: {
    	fontFamily: 'lobster',
    	fontSize: 26,
    	color: '#fff',
        textAlign: 'center'
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