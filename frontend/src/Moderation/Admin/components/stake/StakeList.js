import React from 'react'
import { Datagrid, DateField, DeleteButton, List, TextField } from 'react-admin'
const StakeList = props => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='Coef' />
				<TextField source='TeamCountry' />
				<TextField source='TeamLogo' />
				<TextField source='TeamName' />
				<TextField source='amount' />
				<TextField source='status' />
				<TextField source='team_id' />
				<TextField source='user_id' />
				<DateField source='stake_time' />

				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default StakeList
