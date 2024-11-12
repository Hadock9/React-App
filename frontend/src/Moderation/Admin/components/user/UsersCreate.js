import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const UsersCreate = props => {
	return (
		<Create title={'Create User'} {...props}>
			<SimpleForm>
				<TextInput source='First_Name' />
				<TextInput source='Email' />
				<TextInput source='Password' />
				<TextInput source='Last_Name' />
			</SimpleForm>
		</Create>
	)
}

export default UsersCreate
