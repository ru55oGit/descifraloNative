import React, {Component} from 'react';
import { View,
         Text,
         TextInput, 
         Button, 
         ScrollView, 
         Switch, 
         Image,
         FlatList,
         ListItem
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';
import Data from '../containers/data.json';

class Home extends Component {
	state = {
		isReady: false,
		trueSwitchIsOn: true,
    	falseSwitchIsOn: false
	};

	async componentWillMount() {
		await Font.loadAsync({
			'lobster' : require('../../assets/fonts/lobster-two.italic.ttf')
		});

		this.setState({isReady: true});
	}
	
	toggleSwitch1 = (value) => {
      this.setState({ trueSwitchIsOn: value })
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
                <View>
                    <FlatList
                        data={Data.palabras}
                        numColumns={4}
                        style={{alignSelf: 'stretch'}}
                        renderItem={({item, index}) => 
                            <Image key={index} 
                                   style={styles.circle}
                                   source={require('../../assets/img/selectlevelback.png')}>
                                <Text style={styles.textCircle}>{index+1}</Text>
                            </Image>
                        }
                    />
                </View>
				<View style={styles.footerContainer}>
					<Text style={styles.footerText}>Español</Text>
					<Switch 
					  onValueChange={this.toggleSwitch1.bind(this)} 
					  value={ this.state.trueSwitchIsOn } 
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
    	backgroundColor: '#d7716d',
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
        paddingRight: 5,
    	fontFamily: 'lobster',
    	fontSize: 23,
    	color: '#fff',
        textAlign: 'center'
    },
    footerContainer: {
		backgroundColor: '#d7716d',
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

export default Home;