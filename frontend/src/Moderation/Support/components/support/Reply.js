import React from 'react'
import { useGetOne } from 'react-admin'
import { FormProvider, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../../../context/AuthContext'
import Mybutton from '../../../../UI/Mybutton'
import MyTextArea from '../../../../UI/TextArea'

const Reply = () => {
	const { id } = useParams()
	const { data: record, isLoading, error } = useGetOne('support', { id })
	const { user } = useAuth()

	const methods = useForm({
		defaultValues: {
			content: '',
		},
	})

	const onSubmit = data => {
		const formattedData = {
			...data,
			user_id: record.author_id,
			admin_id: user.id,
			support_id: record.id,
		}

		console.log('Formatted Data:', formattedData)

		// Тут відправляємо запит на сервер
		fetch('http://localhost:4000/api/notifications', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formattedData),
		})
			.then(response => response.json())
			.then(result => {
				toast.success('Notification created successfully!')
				console.log('Success:', result)
			})
			.catch(error => {
				toast.error('Failed to create notification')
				console.error('Error:', error)
			})
	}

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!record) return <div>No record found</div>

	return (
		<div>
			<h1>Reply to support request {record.id}</h1>
			<p>
				<strong>Author:</strong> {record.author}
			</p>
			<p>
				<strong>Title:</strong> {record.title}
			</p>
			<p>
				<strong>Content:</strong> {record.content}
			</p>
			<p>
				<strong>Request type:</strong> {record.request_type}
			</p>
			<p>
				<strong>Created at:</strong> {record.created_at}
			</p>

			{/* Форма відповіді */}
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<div>
						<label htmlFor='content'>Reply Content</label>
						<MyTextArea
							id='content'
							type='text'
							placeholder='Введіть свою відповідь тут'
							{...methods.register('content', {
								required: 'Content is required',
							})}
						/>
						{methods.formState.errors.content && (
							<p className='error'>
								{methods.formState.errors.content.message}
							</p>
						)}
					</div>

					<Mybutton type='submit' className='btn-primary'>
						Submit Reply
					</Mybutton>
				</form>
			</FormProvider>
		</div>
	)
}

export default Reply
