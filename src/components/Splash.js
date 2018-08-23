import React from 'react';
import { View, StatusBar, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Splash = () => {
	return(
		<View style={styles.containerSectionStyle}>
			<StatusBar hidden={true} />
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