import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useFetchGet from '../hooks/fetch/useFetchGet'
import { validateTextArea } from '../js/FormValidation'
import { NewsDate } from '../js/TimeValidation'
import LikesDisslikes from './LikesDisslikes'
import MyLoader from './Loader'

const Comments = ({ id }) => {
	const navigate = useNavigate()

	const [Comments, SetComments] = useState([])
	const { user } = useAuth()

	const { Data, isLoading, failedToFetch } = useFetchGet({
		url: 'http://localhost:4000/api/comments/news_comments',
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
			news_id: id,
			author: user.first_name,
			content: CommentText,
			picture: user.picture,
		}

		const response = await fetch(
			'http://localhost:4000/api/comments/news_comments/comment',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(CommentData),
			}
		)

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
					{CommentTextDirty && CommentTextError && (
						<motion.div
							initial={{ x: -100, scale: 0 }}
							animate={{ x: 0, scale: 1 }}
							transition={{ ease: 'easeIn', duration: 0.5 }}
							className='inline-block my-2 p-2 text-red-600 bg-red-100 border border-red-300 rounded-md'
						>
							{CommentTextError}
						</motion.div>
					)}
					<form onSubmit={handleSubmit} className='flex flex-col justify-start'>
						<motion.textarea
							initial={{ y: 0 }}
							animate={{ y: CommentTextError ? 10 : 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							id='textarea'
							onBlur={SetCommentTextDirty}
							value={CommentText}
							onChange={handleCommentText}
							className='resize-y min-h-[80px] max-h-[300px] overflow-auto w-[90%] h-[100px] p-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5ba1a] focus:border-[#f5ba1a] text-gray-700 placeholder-gray-500'
							placeholder='Введіть свій коментар...'
						></motion.textarea>

						<motion.button
							whileTap={{ scale: 0.9 }}
							initial={{ scale: 1 }} // Початковий розмір
							animate={{ scale: ondisable ? 1 : 0.95 }}
							type='submit'
							disabled={!ondisable}
							className={`mt-4 w-[100px] h-[44px] bg-[#f5ba1a] text-white border-none cursor-pointer rounded-md transition-all duration-300
                disabled:bg-gray-300 disabled:cursor-not-allowed`}
						>
							Submit
						</motion.button>
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
