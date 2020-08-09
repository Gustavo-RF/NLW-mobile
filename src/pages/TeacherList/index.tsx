import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";

function TeacherList() {
	const [filtersVisible, setFiltersVisible] = useState(false);

	function handleToogleFiltersVisible() {
		setFiltersVisible(!filtersVisible);
	}

	return (
		<View style={styles.container}>
			<PageHeader title="Proffys disponíveis" 
				headerRight={(
					<BorderlessButton onPress={handleToogleFiltersVisible}>
						<Feather name="filter" size={20} color="#fff" />
					</BorderlessButton>
				)}>
				{ filtersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>
							Matéria
						</Text>
						<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?"></TextInput>

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia"></TextInput>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o horário"></TextInput>
							</View>
						</View>

						<RectButton style={styles.submitButton}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView style={styles.teacherList} contentContainerStyle={{ 
				paddingHorizontal: 26,
				paddingBottom: 16,
			 }}>
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />

			</ScrollView>

		</View>
	)
}

export default TeacherList;