import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import HeartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import UnfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import WhatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/15891351?s=460&u=ccd24d483ef44e3b3a05b17247987eb5a9a42e18&v=4' }} />

				<View style={styles.profileInfo}>
					<Text style={styles.name}>Gustavo Ramaldes</Text>
					<Text style={styles.subject}>Física</Text>
				</View>
			</View>
			
			<Text style={styles.bio}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ullam sed voluptas ipsam quibusdam consequuntur corrupti magni aut ut nemo maxime tempora cupiditate iste cumque, laborum saepe maiores labore eligendi!
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/hora: {'    '}
					<Text style={styles.priceValue}>R$ 20,00</Text>
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