import React from 'react'
import {
	Button,
	Datagrid,
	DateField,
	DeleteButton,
	ImageField,
	Link,
	List,
	TextField,
	useRecordContext,
} from 'react-admin'

const ReplyButton = () => {
	const record = useRecordContext()
	return (
		<Button
			component={Link}
			to={`/user/${record.id}/reply`}
			label='Відповісти'
		/>
	)
}

const SupportList = ({ basePath, ...props }) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='author' />
				<TextField source='title' />
				<TextField source='content' />
				<ImageField source='picture' />
				<TextField source='request_type' />
				<DateField source='created_at' />
				<ReplyButton />
				<DeleteButton basePath='/support' />
			</Datagrid>
		</List>
	)
}

export default SupportList
