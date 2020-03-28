import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class UserItem extends React.Component {
	render() {
		const user = this.props.user
		return (
			<View>
				<Text>{user.id}</Text>
				<Text>{user.username}</Text>
			</View>
		)
	}
}

export default UserItem