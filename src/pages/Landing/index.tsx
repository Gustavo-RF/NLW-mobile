import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';

import LandingImg from '../../assets/images/landing.png';
import StudyIcon from '../../assets/images/icons/study.png';
import GiveclassesIcon from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from '../../services/api';

function Landing() {
	const navigation = useNavigation();
	const [totalConnections, setTotalConnections] = useState(0);

	function handleNavigationToGiveClassesPage() {
		navigation.navigate('GiveClasses');
	}

	function handleNavigateToStudyPage() {
		navigation.navigate('Study');
	}

	useEffect(() => {
		api.get('connections')
			.then(res => {
				const {total} = res.data
				setTotalConnections(total);
			})
	}, []);

	return (
		<View style={styles.container}>
			<Image style={styles.banner} source={LandingImg} />

			<Text style={styles.title}>
				Seja bem vindo, {'\n'}
				<Text style={styles.titleBold}>O que deseja fazer</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<RectButton style={[styles.button, styles.buttonPrimary]} onPress={handleNavigateToStudyPage}>
					<Image source={StudyIcon} />
					<Text style={styles.buttonText}>Estudar</Text>
				</RectButton>

				<RectButton style={[styles.button, styles.buttonSecondary]} onPress={handleNavigationToGiveClassesPage}>
					<Image source={GiveclassesIcon} />
					<Text style={styles.buttonText}>Dar aulas</Text>
				</RectButton>
			</View>
			
			<Text style={styles.totalConnections}>
				Totald de {totalConnections} conexões já realizadas {' '}
				<Image source={HeartIcon} />
			</Text>
		</View>
	)
}

export default Landing;