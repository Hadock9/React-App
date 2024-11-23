import { Edit } from 'lucide-react'
import React from 'react'
import {
	Datagrid,
	DeleteButton,
	EditButton,
	ImageField,
	List,
	TextField,
} from 'react-admin'
const GamesList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='name' />
				<TextField source='views' />
				<ImageField source='ImageSrc' />

				<EditButton icon={<Edit />} />
				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default GamesList
