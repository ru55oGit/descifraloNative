import React, { Component }  from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class GuessImage extends Component {
	constructor(props){
	  super(props);
	}
	render(){
		return(
			<View style={styles.containerSectionStyle}>
				<Text>Nivel {this.props.level}</Text>
			</View>
		);
	}
};

const styles = {
	containerSectionStyle: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 200,
    }
};

export default GuessImage;