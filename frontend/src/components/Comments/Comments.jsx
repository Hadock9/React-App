import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import useFetchGet from '../../hooks/useFetchGet'
import { validateTextArea } from '../../js/FormValidation'
import { NewsDate } from '../../js/TimeValidation'
import IsRegUser from '../../UI/IsRegUser'
import Mybutton from '../../UI/Mybutton'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'
import LikesDisslikes from '../Comments/LikesDisslikes'
import MyLoader from './../Disclaimer/Loader'

const Comments = ({ id, urlFetch, urlPost, what_id }) => {
	const navigate = useNavigate()

	const [Comments, SetComments] = useState([])
	const { user, isRegUser } = useAuth()

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: urlFetch,
	})

	useEffect(() => {
		if (Data) {
			SetComments(
				Data.map(comment => ({
					...comment,
					onlikes: comment.likedOrDisliked === 'like' ? true : false,
					ondislikes: comment.likedOrDisliked === 'dislike' ? true : false,
				}))
			)
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
			toast.success('Комент додано успішно')
			SetComments(prevComments => {
				// Отримуємо максимальний ID із наявних коментарів
				const maxId =
					prevComments.length > 0 ? Math.max(...prevComments.map(c => c.id)) : 0

				// Визначаємо, яке поле (news_id чи match_id) використовувати на основі значення what_id
				const newComment = {
					...CommentData,
					id: maxId + 1,
					publish_date: new Date(),
					likes: 0,
					dislikes: 0,
				}

				if (what_id === 'news') {
					newComment.news_id = id
				} else if (what_id === 'match') {
					newComment.match_id = id
				}

				// Додаємо новий коментар до масиву коментарів
				return [...prevComments, newComment]
			})
			SetCommentText('')
			SetCommentTextError('Дане поле не може бути пустим')
			SetCommentTextDirty(false)
		} else {
			const errorData = await response.json()
			console.log('Помилка:', errorData)
			toast.error('Комент додано не успішно')
			SetCommentText('')
			SetCommentTextError('Дане поле не може бути пустим')
			SetCommentTextDirty(false)
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
			<Toaster position='top-center' reverseOrder={false} />

			<div className='flex'>
				<h1 className='text-xl text-black font-semibold'>
					Коментарі {Comments.length}
				</h1>
			</div>
			<IsRegUser>
				Ви не зареєстровані. Коментарі можуть залишати тільки зареєстровані
				користувачі.Лайки та дизлайки можуть ставити також тільки зареєстровані
				користувачі
			</IsRegUser>
			<div className='My comment my-3 flex'>
				<div className='w-[10%] flex justify-center   items-center'>
					<img
						src={isRegUser ? user.picture : '/img/User-Default.svg'}
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
						<Mybutton ondisable={ondisable & isRegUser}>Submit</Mybutton>
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

export default React.memo(Comments)
