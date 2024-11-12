import BurgerMenu from '../components/BurgerMenu'
import Footer from '../components/UserExpirience/Footer'
import NavBar from '../components/UserExpirience/NavBar'

import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { ChevronUp } from 'lucide-react'
import rootstyle from '../styles/root.module.css'

function FAQ() {
	const FAQInfo = [
		{
			Summary: 'Що таке CyberBet?',
			Details: 'CyberBet — це платформа для ставок на різні ігри та матчі.',
		},
		{
			Summary: 'Як створити акаунт на CyberBet?',
			Details:
				'Щоб створити акаунт, натисніть кнопку "Реєстрація" та заповніть реєстраційну форму.',
		},
		{
			Summary: 'На які ігри можна робити ставки?',
			Details:
				'CyberBet пропонує широкий вибір ігор, включаючи Dota 2, CS:GO, League of Legends, та інші.',
		},
		{
			Summary: 'Як поповнити баланс?',
			Details:
				'Перейдіть до розділу "Баланс" та оберіть зручний спосіб оплати для поповнення рахунку.',
		},
		{
			Summary: 'Як вивести виграші?',
			Details:
				'Щоб вивести кошти, перейдіть до розділу "Виведення" та оберіть бажаний метод виведення.',
		},
		{
			Summary: 'Чи можна робити ставки з мобільного телефону?',
			Details:
				'Так, ви можете робити ставки зі смартфона або планшета через адаптований сайт або додаток.',
		},
		{
			Summary: 'Що робити, якщо я забув пароль?',
			Details:
				'Натисніть "Забули пароль?" на сторінці входу, щоб отримати інструкції з відновлення.',
		},
		{
			Summary: 'Чи є на сайті бонуси для нових користувачів?',
			Details:
				'Так, після реєстрації ви отримаєте вітальний бонус на перший депозит.',
		},
	]

	return (
		<div className={rootstyle.wrapper}>
			<NavBar />

			<div className={rootstyle.Container}>
				<BurgerMenu />

				<main className={rootstyle.Main}>
					<div className='flex flex-col items-center justify-center mb-6'>
						<h1 className='text-4xl font-bold'>FAQ</h1>
						<div>
							{FAQInfo.map((item, index) => (
								<Accordion key={index}>
									<AccordionSummary
										aria-controls={`panel${index}-content`}
										id={`panel${index}-header`}
										expandIcon={<ChevronUp />}
									>
										<h2>{item.Summary}</h2>
									</AccordionSummary>
									<AccordionDetails>
										<p>{item.Details}</p>
									</AccordionDetails>
								</Accordion>
							))}
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default FAQ
