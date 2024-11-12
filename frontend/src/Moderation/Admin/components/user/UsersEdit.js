import React from 'react'
import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin'

const UsersEdit = props => {
	return (
		<Edit title={'Edit User'} {...props}>
			<SimpleForm>
				<TextInput source='id' disabled />
				<TextInput source='first_name' />
				<TextInput source='last_name' />
				<TextInput source='picture' />
				<TextInput source='email' />
				<TextInput source='role' />
				<DateInput source='created_at' />
			</SimpleForm>
		</Edit>
	)
}

export default UsersEdit
