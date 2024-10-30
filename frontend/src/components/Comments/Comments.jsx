import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import { validateTextArea } from '../../js/FormValidation'
import { NewsDate } from '../../js/TimeValidation'
import Mybutton from '../../UI/Mybutton'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'
import LikesDisslikes from '../Comments/LikesDisslikes'
import MyLoader from './../Disclaimer/Loader'

const Comments = ({ id, urlFetch, urlPost }) => {
	const navigate = useNavigate()

	const [Comments, SetComments] = useState([])
	const { user } = useAuth()

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: urlFetch,
		id: id,
	})

	useEffect(() => {
		if (Data) {
			SetComments(Data)
		}
	}, [Data])

	const [ondisable, Setondisable] = useState(true)
	const [CommentText, SetCommentText] = useState(' ')
	const [CommentTextDirty, SetCommentTextDirty] = useState(false)
	const [CommentTextError, SetCommentTextError] = useState(
		'Дане поле не може бути пустим'
	)
	const handleSubmit = async e => {
		e.preventDefault()

		const CommentData = {
			id: id,
			author: user.first_name,
			content: CommentText,
			picture: user.picture,
		}

		const response = await fetch(urlPost, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(CommentData),
		})

		if (response.ok) {
			console.log('Комент вставлений успішно ')
			navigate(0)
		} else {
			const errorData = await response.json()
			console.log('Помилка:', errorData)
		}
	}
	const handleCommentText = e => {
		SetCommentText(e.target.value)

		SetCommentTextError(validateTextArea(e.target.value))
	}
	useEffect(() => {
		if (!CommentTextError) {
			Setondisable(true)
		} else {
			Setondisable(false)
		}
	}, [CommentText])

	if (isLoading) {
		return <MyLoader />
	}
	return (
		<div className='Comments'>
			<div className='flex'>
				<h1 className='text-xl text-black font-semibold'>
					Коментарі {Comments.length}
				</h1>
			</div>
			<div className='My comment my-3 flex'>
				<div className='w-[10%] flex justify-center   items-center'>
					<img
						src={user.picture}
						className='w-[40px] h-[40px] rounded-full'
						alt=''
					/>
				</div>
				<div className='w-[100%]'>
					<TextError
						TextDirty={CommentTextDirty}
						TextError={CommentTextError}
					/>
					<form onSubmit={handleSubmit} className='flex flex-col justify-start'>
						<MyTextArea
							TextError={CommentTextError}
							id='textarea'
							onBlur={SetCommentTextDirty}
							value={CommentText}
							onChange={handleCommentText}
						/>
						<Mybutton ondisable={ondisable}>Submit</Mybutton>
					</form>
				</div>
			</div>

			{Comments.map(OneComment => (
				<div className='comment-block flex  my-3 w-[80] ' key={OneComment.id}>
					<div className='w-[100px] flex justify-center   items-center'>
						<img
							src={OneComment.picture}
							className='w-[40px] h-[40px] rounded-full'
							alt=''
						/>
					</div>
					<div className=' w-[80%]'>
						<div className='flex justify-start items-center h-auto'>
							<p className='text-lg text-black font-semibold'>
								{OneComment.author}
							</p>
							<p className='ml-3 text-gray-400'>
								{NewsDate(OneComment.publish_date)}
							</p>
						</div>
						<div className='  mt-2'>
							<p className='w-[90%]'>{OneComment.content}</p>
						</div>
						<LikesDisslikes OneComment={OneComment} />
					</div>
				</div>
			))}
		</div>
	)
}

export default Comments
