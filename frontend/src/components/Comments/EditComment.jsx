import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Mybutton from '../../UI/Mybutton'
import MyTextArea from '../../UI/TextArea'
import TextError from '../../UI/TextError'
import { validateTextArea } from '../../js/FormValidation'

const EditComment = ({
	OneComment,
	editedText,
	setEditedText,
	SetComments,
	Comments,
	setEditingCommentId,
}) => {
	const [editedTextDirty, setEditedTextDirty] = useState(false)
	const [editedTextError, setEditedTextError] = useState('')
	const [editedTextOnDisable, setEditedTextOnDisable] = useState(true)

	const handleSaveClick = async commentId => {
		const response = await fetch(
			'http://localhost:4000/api/comments/update_comment',
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ commentId, content: editedText }),
			}
		)

		if (response.ok) {
			console.log('Комент відредагований успішно ')
			toast.success('Комент відредагований успішно')
			setEditingCommentId(null)
			SetComments(
				Comments.map(comment =>
					comment.id === commentId
						? { ...comment, content: editedText }
						: comment
				)
			)
		} else {
			const errorData = await response.json()
			console.log('Помилка:', errorData)
			toast.error('Комент відредагований не успішно')
		}
	}

	return (
		<div className='flex flex-col w-[90%]'>
			<TextError TextDirty={editedTextDirty} TextError={editedTextError} />
			<MyTextArea
				value={editedText}
				onBlur={setEditedTextDirty}
				onChange={e => {
					setEditedText(e.target.value)
					setEditedTextError(validateTextArea(e.target.value))
				}}
				className='border rounded p-1'
			/>
			<Mybutton
				ondisable={editedTextOnDisable}
				onClick={() => handleSaveClick(OneComment.id)}
				className='bg-blue-500 text-white rounded p-1 mt-2'
			>
				Зберегти
			</Mybutton>
		</div>
	)
}

export default EditComment
