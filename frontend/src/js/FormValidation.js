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
