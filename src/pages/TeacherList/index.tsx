import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import api from '../../services/api';

function TeacherList() {
	const [filtersVisible, setFiltersVisible] = useState(false);
	const [subject, setSubject] = useState('');
	const [weekday, setWeekday] = useState('');
	const [time, setTime] = useState('');

	const [ teachers, setTeachers ] = useState([]);

	function handleToogleFiltersVisible() {
		setFiltersVisible(!filtersVisible);
	}

	async function handleFiltersSubmit() {
		const res = await api.get('/classes', {
			params: {
				subject,
				weekday,
				time
			}
		})

		setTeachers(res.data);

		setFiltersVisible(false);

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
						<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual a matéria?"
							value={subject}
							onChangeText={text => setSubject(text)} />

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o dia" 
									value={weekday}
									onChangeText={text => setWeekday(text)} />
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput placeholderTextColor="#c1bccc" style={styles.input} placeholder="Qual o horário" 
									value={time}
									onChangeText={text => setTime(text)} />
							</View>
						</View>

						<RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
							<Text style={styles.submitButtonText}>Filtrar</Text>
						</RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView style={styles.teacherList} contentContainerStyle={{ 
				paddingHorizontal: 26,
				paddingBottom: 16,
			}}>
			{
				teachers.map((teacher: Teacher) => {
					return (
						<TeacherItem key={teacher.id} teacher={teacher} />
					)
				})
			}
				{/* <TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem />
				<TeacherItem /> */}

			</ScrollView>

		</View>
	)
}

export default TeacherList;