import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';
import PrimaryButton from '../components/PrimaryButton';
function GameScreen(props) {
    return (
        <View>
            <Title>Opponent's Guess</Title>
            {/* Guess */}
            <View style={styles.button}>
                <PrimaryButton styles={styles.indbutton}>+</PrimaryButton>
                <PrimaryButton>-</PrimaryButton>
                {/* +_ */}
            </View>
            {/* <View>log rounds</View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24

    },
    title: {
        fontSize: 20,

    },
    button: {
        direction: 'flex',
        borderBottomColor: '#ddb52f'

    },
    indbuttton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#3b021f',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
})