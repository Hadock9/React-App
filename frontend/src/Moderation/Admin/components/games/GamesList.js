import { Edit } from 'lucide-react'
import React from 'react'
import {
	Datagrid,
	DeleteButton,
	EditButton,
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
				<TextField source='ImageSrc' />

				<EditButton basePath='/support' icon={<Edit />} />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default GamesList
