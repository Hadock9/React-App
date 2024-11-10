// Валідація Email
export const validateEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
	return re.test(String(email).toLowerCase()) ? '' : 'Email не правильний'
}

// Валідація пароля
export const validatePassword = password => {
	const re =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/

	if (!password) {
		return 'Поле не може бути пустим'
	} else if (password.length < 6 || password.length > 16) {
		return 'Поле має бути від 6 до 16 символів'
	} else if (!re.test(String(password))) {
		return 'Пароль повинен містити хоча б одну цифру,одну велику літеру,одну малу літеру і один спеціальний символ (!@#$%^&*)'
	}
	return ''
}

// Валідація повторного пароля
export const validateRePassword = (rePassword, password) => {
	if (!rePassword) {
		return 'Поле не може бути пустим'
	} else if (rePassword !== password) {
		return 'Паролі не збігаються'
	}
	return ''
}

// Валідація імені
export const validateName = name => {
	const re = /^[A-ZА-ЯІЇЄ][a-zа-яіїє'їє]+(?:[- ][A-ZА-ЯІЇЄ][a-zа-яїє'їє]+)?$/
	return re.test(name)
		? ''
		: "Ім'я повинно містити тільки літери, перша літера мaє бути великою, а решта — маленькими, і можливий один пробіл між словами (якщо ім'я подвійне)."
}
// Валідація прізвища
export const validateLastName = name => {
	const re = /^[A-ZА-ЯІЇЄ][a-zа-яіїє'їє]+(?:[- ][A-ZА-ЯІЇЄ][a-zа-яїє'їє]+)?$/
	return re.test(name)
		? ''
		: 'Прізвище повинно містити тільки літери, перша літера мaє бути великою, а решта — маленькими, і можливий один пробіл між словами (якщо прізвище подвійне).'
}

// Валідація умов
export const validateConditions = conditions => {
	return conditions ? '' : 'Ви повинні погодитися з умовами.'
}

// Валідація дати народження
export const validateDate_of_birth = Date_of_birth => {
	// Перетворюємо рядок дати на об'єкт Date
	const dateOfBirth = new Date(Date_of_birth)
	const date_now = new Date()

	// Мінімальна дата (1 січня 1900 року)
	const date_min = new Date('1900-01-01')

	// Перевірка
	if (dateOfBirth > date_min && dateOfBirth < date_now) {
		return '' // Дата дійсна
	} else {
		return 'Дата повинна бути більшою ніж 1900 рік, але меншою ніж сьогодення'
	}
}

export const validatePhone = Phone => {
	const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
	return re.test(Phone) ? '' : 'Телефон введено не правильно...'
}

export const validateTextArea = textArea => {
	const trimmedText = textArea.trim()

	if (!trimmedText) {
		return 'Поле не може бути пустим'
	} else if (trimmedText.length < 4 || trimmedText.length > 500) {
		return `Поле має бути від 4 до 500 символів. Кількість символів: ${trimmedText.length}`
	}

	return ''
}

export const validateInput = Input => {
	const trimmedText = Input.trim()

	if (!trimmedText) {
		return 'Поле не може бути пустим'
	} else if (trimmedText.length < 4 || trimmedText.length > 500) {
		return `Поле має бути від 4 до 500 символів. Кількість символів: ${trimmedText.length}`
	}

	return ''
}

export const validateStakeAmount = (Amount, UserBalance) => {
	if (!Amount) {
		return 'Поле не може бути пустим'
	} else {
		if (Amount == 0) {
			return 'Поле не може дорівнювати 0 ₴'
		} else if ((Amount == 0) & (UserBalance == 0)) {
			return `Ваш баланс 0 ₴`
		} else if (Amount < 0 || Amount > UserBalance) {
			return `Поле має бути більшим за 0  та меншим за ваш баланс ${UserBalance} ₴`
		}
	}

	return ''
}

// Валідація імені на картці
export const validateCardName = Name => {
	if (!Name) return "Ім'я власника не може бути пустим"
	const re = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
	return re.test(Name)
		? ''
		: "Ім'я повинно містити два слова, перша літера кожного слова мaє бути великою та написане латиною."
}

export const validateCreditCard = card => {
	if (!card) return 'Номер карти не може бути пустим'

	const visaMasterPattern = /^(4\d{15}|5[1-5]\d{14}|2[2-7]\d{14})$/

	const cleanedCard = card.replace(/\s/g, '')

	if (!visaMasterPattern.test(cleanedCard)) {
		return 'Дані ведені неправильно або дана карта не є дійсною'
	}

	return ''
}

export const validateExpDate = expDate => {
	if (!expDate) return 'Поле з датою не може бути пустим'

	const expPattern = /^(0[1-9]|1[0-2])\/\d{2}$/
	if (!expPattern.test(expDate)) {
		return 'Неправильний формат дати'
	}

	const [month, year] = expDate.split('/').map(Number)

	const currentDate = new Date()
	const currentMonth = currentDate.getMonth() + 1
	const currentYear = currentDate.getFullYear() % 100

	if (year < currentYear || (year === currentYear && month < currentMonth)) {
		return 'Термін карти збіг кінця'
	}

	return ''
}

export const validateCVV = cvv => {
	if (!cvv) return 'Поле з кодом безпеки не може бути пустим'

	const cvvPattern = /^\d{3}$/
	if (!cvvPattern.test(cvv)) return 'Поле з кодом безпеки заповнено неправильно'
}

export const validateAmount = amount => {
	if (!amount) return 'Поле суми не може бути пустим'
	const numericAmount = Number(amount)

	if (!Number.isInteger(numericAmount) || numericAmount < 1) {
		return 'Це повинно бути ціле число більше 0'
	}

	return ''
}
