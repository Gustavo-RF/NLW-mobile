import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import HeartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import WhatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface Teacher {
	avatar: string;
	bio: string;
	cost: number;
	id: number;
	name: string;
	subject: string;
	user_id: number;
	whatsapp: string;
}

interface TeacherItemProps {
	teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image style={styles.avatar} source={{ uri: teacher.avatar }} />

				<View style={styles.profileInfo}>
					<Text style={styles.name}>{teacher.name}</Text>
					<Text style={styles.subject}>{teacher.subject}</Text>
				</View>
			</View>
			
			<Text style={styles.bio}>
				{teacher.bio}
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora: {'    '}
					<Text style={styles.priceValue}>R$ {teacher.cost}</Text>
				</Text>

				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.favoriteButton, styles.favorited]}>
						{/* <Image source={HeartOutlineIcon} /> */}
						<Image source={UnfavoriteIcon} />
					</RectButton>

					<RectButton style={styles.contactButton}>
						<Image source={WhatsappIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	)
}

export default TeacherItem;