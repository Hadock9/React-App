import { Box, CircularProgress, Paper, Typography } from '@mui/material'
import React from 'react'
import { useGetOne } from 'react-admin'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../../context/AuthContext'
import { validateTextAreaHF } from '../../../../js/FormValidation'
import Mybutton from '../../../../UI/Mybutton'
import Mylabel from '../../../../UI/Mylabel'
import MyTextArea from '../../../../UI/TextArea'
import TextError from '../../../../UI/TextError'

const Reply = () => {
	const { id } = useParams()
	const { data: record, isLoading, error } = useGetOne('support', { id })
	const { user } = useAuth()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		trigger,
		clearErrors,
	} = useForm({ mode: 'onChange' })

	const onSubmit = data => {
		const formattedData = {
			...data,
			user_id: record.author_id,
			admin_id: user.id,
			support_id: record.id,
		}

		fetch('http://localhost:4000/api/notifications', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formattedData),
		})
			.then(response => response.json())
			.then(() => {
				toast.success('Reply sent successfully')
				return fetch(`http://localhost:4000/api/support/reply/${record.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
			})
			.then(response => response.json())
			.then(() => {
				toast.success('Reply updated successfully')
				navigate('/support')
			})
			.catch(() => {
				toast.error('Failed to reply')
			})
	}

	if (isLoading)
		return (
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				height='100vh'
			>
				<CircularProgress />
			</Box>
		)

	if (error)
		return (
			<Typography color='error' align='center'>
				Error: {error.message}
			</Typography>
		)

	if (!record)
		return (
			<Typography color='textSecondary' align='center'>
				No record found
			</Typography>
		)

	return (
		<Paper
			elevation={3}
			sx={{
				maxWidth: '800px',
				width: '90%',
				margin: '20px auto',
				padding: '20px',
			}}
		>
			<Box>
				<Typography variant='h5' color='primary' gutterBottom>
					Reply to Support Request #{record.id}
				</Typography>
				<Typography>
					<strong>Author:</strong> {record.author}
				</Typography>
				<Typography>
					<strong>Title:</strong> {record.title}
				</Typography>
				<Typography>
					<strong>Content:</strong> {record.content}
				</Typography>
				<Typography>
					<strong>Request Type:</strong> {record.request_type}
				</Typography>
				<Typography>
					<strong>Created At:</strong> {record.created_at}
				</Typography>
			</Box>

			<form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '20px' }}>
				<Mylabel htmlFor='content'>Reply Content</Mylabel>
				<TextError
					TextDirty={!!errors.content}
					TextError={errors.content?.message}
				/>
				<MyTextArea
					id='content'
					placeholder='Write your reply here...'
					{...register('content', {
						validate: validateTextAreaHF,
						onChange: () => {
							trigger('content')
							clearErrors('content')
						},
					})}
					onBlur={() => trigger('content')}
				/>
				<Mybutton
					ondisable={isValid}
					className='btn-primary'
					sx={{ marginTop: '10px' }}
				>
					Submit Reply
				</Mybutton>
			</form>
		</Paper>
	)
}

export default Reply
