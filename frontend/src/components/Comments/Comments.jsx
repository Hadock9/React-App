import { AnimatePresence, motion } from 'framer-motion'
import { BadgeX, Pencil } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { validateTextArea } from '../../js/FormValidation'

import useFetchGet from '../../hooks/useFetchGet'
import { NewsDate } from '../../js/TimeValidation'
import IsRegUser from '../../UI/IsRegUser'
import Mybutton from '../../UI/Mybutton'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'
import LikesDisslikes from '../Comments/LikesDisslikes'
import MyLoader from './../Disclaimer/Loader'
import EditComment from './EditComment'

const Comments = ({ id, urlFetch, urlPost, what_id }) => {
	const navigate = useNavigate()

	const [Comments, SetComments] = useState([])
	const { user, isRegUser } = useAuth()

	const [editingCommentId, setEditingCommentId] = useState(null)
	const [editedText, setEditedText] = useState('')

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
			user_id: user.id,
			content: CommentText,
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
			toast.error('Комент додано не успішно')
			SetCommentText('')
			SetCommentTextError('Дане поле не може бути пустим')
			SetCommentTextDirty(false)
		}
	}

	const handleDeleteComment = async Comment_id => {
		const response = await fetch(
			'http://localhost:4000/api/comments/delete_comment',
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ commentId: Comment_id }),
			}
		)

		if (response.ok) {
			console.log('Комент видалений успішно ')
			toast.success('Комент видалено успішно')
			SetComments(Comments.filter(comment => comment.id !== Comment_id))
		} else {
			const errorData = await response.json()
			console.log('Помилка:', errorData)
			toast.error('Комент видалено не успішно')
		}
	}
	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: urlFetch,
	})
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

	const handleEditClick = comment => {
		setEditingCommentId(comment.id)
		setEditedText(comment.content)
	}

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
			<AnimatePresence>
				{Comments.map((OneComment, index) => (
					<motion.div
						initial='hidden'
						whileInView='show'
						exit='hidden'
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0, x: -50 },

							show: {
								opacity: 1,
								x: 0,
								transition: {
									duration: 0.5,
								},
							},
						}}
						className='comment-block flex  my-3 w-[80] '
						key={OneComment.id}
					>
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
							<div className='flex justify-between  mt-2'>
								{editingCommentId === OneComment.id ? (
									<EditComment
										OneComment={OneComment}
										editedText={editedText}
										setEditedText={setEditedText}
										SetComments={SetComments}
										Comments={Comments}
										setEditingCommentId={setEditingCommentId}
									/>
								) : (
									<p className='w-[90%]'>{OneComment.content}</p>
								)}
								{isRegUser && OneComment.user_id === user.id && (
									<div className='flex justify-center items-center  text-gray-400'>
										<Pencil onClick={() => handleEditClick(OneComment)} />
										<BadgeX
											onClick={() => handleDeleteComment(OneComment.id)}
										/>
									</div>
								)}
							</div>

							<LikesDisslikes OneComment={OneComment} />
						</div>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default React.memo(Comments)
