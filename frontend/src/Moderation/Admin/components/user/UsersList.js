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
const UsersList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='first_name' />
				<TextField source='last_name' />
				<TextField source='picture' />
				<TextField source='email' />
				<TextField source='role' />
				<DateField source='created_at' />
				<EditButton basePath='/support' icon={<Edit />} />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default UsersList
