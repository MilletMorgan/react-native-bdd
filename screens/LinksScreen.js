import * as React from 'react';
import { AppRegistry, TextInput, Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import UserItem from "../components/UserItem";
import { MonoText } from "../components/StyledText";

class LinksScreen extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			TextInputUsername : ''
		}
	}

	InsertDataToServer = (title, message) => {
		const { TextInputUsername } = this.state;
		const data = { username : TextInputUsername }

		fetch('http://localhost:3000/newuser', {
			method : 'POST',
			mode : 'no-cors',
			// body : JSON.stringify({
			//
			// 	foo : "bar",
			//
			// 	foo2 : "bar2"
			//
			// }),
			body : "username=" + TextInputUsername+"&user=bar",

			headers : {
				'Accept' : 'application/json',
				'Content-Type' : 'application/x-www-form-urlencoded',
			}
		}).then((response) => response.json())
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (

			<View style={ styles.container }>
				<ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
					<View style={ styles.welcomeContainer }>
						<Text>Insert into bdd</Text>

						<TextInput

							// Adding hint in Text Input using Place holder.
							placeholder="Enter Username"

							onChangeText={ TextInputUsername => this.setState({ TextInputUsername }) }

							// Making the Under line Transparent.
							underlineColorAndroid='transparent'

							style={ styles.TextInputStyleClass }
						/>


						<Button title="Insert Text Input Data to Server" onPress={ this.InsertDataToServer }
								color="#2196F3"/>


					</View>
				</ScrollView>
			</View>
		)
			;
	}
}


const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#fff',
	},
	TextInputStyleClass : {

		textAlign : 'center',
		marginBottom : 7,
		height : 40,
		borderWidth : 1,
// Set border Hex Color Code Here.
		borderColor : '#FF5722',

// Set border Radius.
		//borderRadius: 10 ,
	},
	developmentModeText : {
		marginBottom : 20,
		color : 'rgba(0,0,0,0.4)',
		fontSize : 14,
		lineHeight : 19,
		textAlign : 'center',
	},
	contentContainer : {
		paddingTop : 30,
	},
	welcomeContainer : {
		alignItems : 'center',
		marginTop : 10,
		marginBottom : 20,
	},
	welcomeImage : {
		width : 100,
		height : 80,
		resizeMode : 'contain',
		marginTop : 3,
		marginLeft : -10,
	},
	getStartedContainer : {
		alignItems : 'center',
		marginHorizontal : 50,
	},
	homeScreenFilename : {
		marginVertical : 7,
	},
	codeHighlightText : {
		color : 'rgba(96,100,109, 0.8)',
	},
	codeHighlightContainer : {
		backgroundColor : 'rgba(0,0,0,0.05)',
		borderRadius : 3,
		paddingHorizontal : 4,
	},
	getStartedText : {
		fontSize : 17,
		color : 'rgba(96,100,109, 1)',
		lineHeight : 24,
		textAlign : 'center',
	},
	tabBarInfoContainer : {
		position : 'absolute',
		bottom : 0,
		left : 0,
		right : 0,
		...Platform.select({
			ios : {
				shadowColor : 'black',
				shadowOffset : { width : 0, height : -3 },
				shadowOpacity : 0.1,
				shadowRadius : 3,
			},
			android : {
				elevation : 20,
			},
		}),
		alignItems : 'center',
		backgroundColor : '#fbfbfb',
		paddingVertical : 20,
	},
	tabBarInfoText : {
		fontSize : 17,
		color : 'rgba(96,100,109, 1)',
		textAlign : 'center',
	},
	navigationFilename : {
		marginTop : 5,
	},
	helpContainer : {
		marginTop : 15,
		alignItems : 'center',
	},
	helpLink : {
		paddingVertical : 15,
	},
	helpLinkText : {
		fontSize : 14,
		color : '#2e78b7',
	},
});

export default LinksScreen