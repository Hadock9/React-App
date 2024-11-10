import { Edit } from 'lucide-react'
import React from 'react'
import {
	Datagrid,
	DateField,
	DeleteButton,
	EditButton,
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
				<TextField source='TeamCountry' />
				<TextField source='Coef' />
				<TextField source='type' />
				<DateField source='created_at' />
				<EditButton basePath='/support' icon={<Edit />} />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default NotificationsList
