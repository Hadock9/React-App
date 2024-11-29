import React from 'react'
import {
	Datagrid,
	DateField,
	DeleteButton,
	ImageField,
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
				<ImageField source='Team1Logo' />
				<ImageField source='Team1Country' />
				<TextField source='Team2Name' />
				<ImageField source='Team2Logo' />
				<ImageField source='Team2Country' />
				<TextField source='season' />
				<TextField source='status' />

				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default MatchList
