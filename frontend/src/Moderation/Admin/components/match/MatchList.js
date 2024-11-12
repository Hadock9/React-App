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

const MatchList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='Place' />
				<DateField source='VsDate' />
				<TextField source='GameName' />
				<TextField source='Team1Name' />
				<TextField source='Team1Logo' />
				<TextField source='Team1Country' />
				<TextField source='Team2Name' />
				<TextField source='Team2Logo' />
				<TextField source='Team2Country' />
				<TextField source='season' />
				<TextField source='status' />
				<EditButton basePath='/support' icon={<Edit />} />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default MatchList
