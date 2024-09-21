import style from '../styles/Profile.module.css'
const Blocks_Info = [
	{
		Name: "Ім'я",
		Text: '139453138',
	},
	{
		Name: 'Прізвище',
		Text: 'Фальовський',
	},
	{
		Name: 'Дата народження',
		Text: '12.01.2004',
	},
	{
		Name: 'Стать',
		Text: 'Чоловіча',
	},
	{
		Name: 'Ел. Пошта',
		Text: 'Ron.bartonzzz@gmail.com',
	},
	{
		Name: 'Номер основного документа',
		Text: ' ',
	},
	{
		Name: 'Індивідуальний податковий номер',
		Text: ' ',
	},
	{
		Name: 'Країна',
		Text: 'Україна',
	},
]

export function ProfileBlocks() {
	return (
		<>
			{Blocks_Info.map(Block => {
				return (
					<div className={style.ProfileBlockText}>
						<div className={style.LabelInput}>
							<label className={style.CustomLabel}> {Block.Name} </label>
							<input
								className={style.CustomInput}
								type='text'
								value='139453138'
								placeholder={Block.Block_Text}
							/>
						</div>
					</div>
				)
			})}
		</>
	)
}
