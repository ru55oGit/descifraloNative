import React, {Component} from 'react';
import { View, Text, TextInput, Button, ScrollView, Switch } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AppLoading, Font } from 'expo';

class Home extends Component {
	state = {
		names: [
			{'name': 'Ben', 'id': 15},
			{'name': 'Susan', 'id': 32},
			{'name': 'Robert', 'id': 3},
			{'name': 'Mary', 'id': 4},
			{'name': 'Daniel', 'id': 5},
			{'name': 'Laura', 'id': 6},
			{'name': 'John', 'id': 7},
			{'name': 'Debra', 'id': 8},
			{'name': 'Aron', 'id': 9},
			{'name': 'Ann', 'id': 10},
			{'name': 'Steve', 'id': 11},
			{'name': 'Olivia', 'id': 12}
		],
		isReady: false,
		toggled: false,
	};

	componentWillMount() {
		(async() => {
			await Font.loadAsync({
				'lobster' : require('../../assets/fonts/lobster-two.italic.ttf')
			});

			this.setState({isReady: true});
		})();
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
				<View style={styles.mainContainer}>
					<ScrollView>
		               {
		                  this.state.names.map((item, index) => (
		                     <View key={item.id}>
		                        <Text>{item.name}</Text>
		                     </View>
		                  ))
		               }
	            	</ScrollView>
				</View>
				<View style={styles.footerContainer}>
					<Text style={styles.footerText}>Español</Text>
					<Switch 
					  onValueChange={this.setState({ toggled: false })} 
					  value={ this.state.toggled } 
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
        backgroundColor: 'green'
    },
    headerContainer: {
    	backgroundColor: 'red',
    	alignSelf: 'stretch',
    	justifyContent: 'center',
    	alignItems: 'center',
    	height: 60,
    },
    headerTitle: {
    	fontFamily: 'lobster',
    	color: 'white',
    	fontSize: 40
    },
    mainContainer: {
    	backgroundColor: 'pink',
    	alignSelf: 'stretch',
    	alignItems: 'center',
    	flex: 1,
    },
    footerContainer: {
		backgroundColor: 'red',
    	alignSelf: 'stretch',
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	alignItems: 'center',
    	height: 60,
    	padding: 10
    },
    footerText: {
    	color: 'white'
    }
};

export default Home;