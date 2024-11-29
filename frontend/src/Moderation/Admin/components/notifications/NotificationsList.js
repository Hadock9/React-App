import React from 'react'
import {
	Datagrid,
	DateField,
	DeleteButton,
	ImageField,
	List,
	TextField,
} from 'react-admin'
const NotificationsList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='content' />
				<TextField source='TeamName' />
				<ImageField source='TeamCountry' />
				<TextField source='Coef' />
				<TextField source='type' />
				<DateField source='created_at' />

				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default NotificationsList
