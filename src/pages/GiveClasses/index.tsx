import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

	const { goBack } = useNavigation()

	function handleNavigateBack() {
		goBack();
	}

	return (
		<View style={styles.container}>
			<ImageBackground source={GiveClassesBgImage} style={styles.content} resizeMode="contain">
				<Text style={styles.title}>Quer ser um proffy?</Text>
				<Text style={styles.description}>Para comecar você precisa se cadastrar na página web.</Text>
			</ImageBackground>

			<RectButton style={styles.okButton} onPress={handleNavigateBack}>
				<Text style={styles.okButtonText}>Tudo bem</Text>
			</RectButton>
		</View>
	)
}

export default GiveClasses;