import React from 'react'
import {
	Datagrid,
	DeleteButton,
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

				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default GamesList
