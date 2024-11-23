import React from 'react'
import {
	BooleanField,
	Button,
	Datagrid,
	DateField,
	DeleteButton,
	FunctionField,
	ImageField,
	List,
	TextField,
	useRecordContext,
} from 'react-admin'
import ForwardedLink from '../forwardRef'
const ReplyButton = () => {
	const record = useRecordContext()

	if (!record || !record.id) return null

	return (
		<Button
			component={ForwardedLink}
			to={`/support/reply/${record.id}`}
			label='Відповісти'
		/>
	)
}

const SupportList = ({ ...props }) => {
	return (
		<List {...props}>
			<Datagrid>
				<TextField source='id' />
				<TextField source='author' />
				<TextField source='title' />
				<FunctionField
					source='reply'
					label='Reply'
					render={(record, source) => (
						<BooleanField
							record={{ ...record, reply: !!record.reply }}
							source={source}
						/>
					)}
				/>
				<TextField source='content' />
				<ImageField source='picture' />
				<TextField source='request_type' />
				<DateField source='created_at' />
				<ReplyButton />
				<DeleteButton />
			</Datagrid>
		</List>
	)
}

export default SupportList
