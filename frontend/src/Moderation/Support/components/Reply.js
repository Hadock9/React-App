import React from 'react'
import { SimpleForm, TextInput, useRecordContext } from 'react-admin'

const Reply = props => {
	const record = useRecordContext()

	return (
		<SimpleForm {...props}>
			<h2>Reply to User: {record ? record.name : ''}</h2>
			<TextInput source='reply' label='Your Reply' />
			{/* Додайте інші поля, які вам потрібні */}
		</SimpleForm>
	)
}

export default Reply
