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
const CommentsList = () => {
	return (
		<List>
			<Datagrid>
				<TextField source='id' />
				<TextField source='author' />
				<TextField source='content' />
				<TextField source='dislikes' />
				<TextField source='likes' />
				<ImageField source='picture' />
				<DateField source='publish_date' />
				<EditButton icon={<Edit />} />
				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default CommentsList
