import React from 'react'
import { useGetOne } from 'react-admin'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../../context/AuthContext'
import { validateTextAreaHF } from '../../../../js/FormValidation'
import Mybutton from '../../../../UI/Mybutton'
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
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			content: `Доброго дня.
Дякуємо за звернення до нашої служби підтримки. Ми отримали ваш запит.
Ми уважно розглянули ваше питання і хочемо надати наступну відповідь:

Якщо у вас залишаться додаткові питання або проблема не вирішиться, будь ласка, дайте нам знати. Ми завжди готові допомогти!`,
		},
	})

	const onSubmit = data => {
		console.log('Data:', data)
		const formattedData = {
			...data,
			user_id: record.author_id,
			admin_id: user.id,
			support_id: record.id,
		}

		console.log('Formatted Data:', formattedData)

		fetch('http://localhost:4000/api/notifications', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formattedData),
		})
			.then(response => response.json())
			.then(result => {
				toast.success('Reply sent successfully')
				console.log('Success:', result)
				fetch(`http://localhost:4000/api/support/reply/${record.id}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				})
					.then(response => response.json())
					.then(result => {
						console.log('Success:', result)
						navigate('/support')
					})
					.catch(error => {
						toast.error('Failed to Reply')
						console.error('Error:', error)
					})
			})
			.catch(error => {
				toast.error('Failed to Reply')
				console.error('Error:', error)
			})
	}

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Error: {error.message}</div>
	if (!record) return <div>No record found</div>

	return (
		<>
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
			</div>

			{/* Форма відповіді */}

			<form className='mt-8' onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='content'>Reply Content</label>
				<TextError
					TextDirty={!!errors.content}
					TextError={errors.content?.message}
				/>
				<MyTextArea
					id='content'
					placeholder='Введіть свою відповідь тут'
					{...register('content', {
						validate: validateTextAreaHF,
						onChange: () => {
							trigger('content')
							clearErrors('content')
						},
					})}
					onBlur={() => trigger('content')}
				/>

				<Mybutton ondisable={isValid} className='btn-primary'>
					Submit Reply
				</Mybutton>
			</form>
		</>
	)
}

export default Reply
