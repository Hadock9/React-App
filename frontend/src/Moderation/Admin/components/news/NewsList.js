import { Edit } from 'lucide-react'
import React from 'react'
import {
	Datagrid,
	DateField,
	DeleteButton,
	EditButton,
	ImageField,
	List,
	TextField,
} from 'react-admin'
const NewsList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='author' />
				<TextField source='description' />
				<TextField source='description' />
				<TextField source='gameName' />
				<ImageField source='image_url' />
				<TextField source='likes' />
				<TextField source='status' />
				<TextField source='title' />
				<TextField source='views' />
				<DateField source='updated_at' />
				<DateField source='publish_date' />
				<EditButton basePath='/support' icon={<Edit />} />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default NewsList
