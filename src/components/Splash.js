import React from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => {
	return(
		<View style={styles.containerSectionStyle}>
			<Button onPress={() => Actions.game_bucket()} title="Jugar">Jugar</Button>
		</View>
	);
};

const styles = {
	containerSectionStyle: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 200,
    }
};

export default Splash;