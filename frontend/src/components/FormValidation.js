// Валідація Email
export const validateEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
	return re.test(String(email).toLowerCase()) ? '' : 'Email неправильний'
}

// Валідація пароля
export const validatePassword = password => {
	const re =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/

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
	const re = /^[A-ZА-ЯІЇЄ][a-zа-яіїє]+(?: [A-ZА-ЯІЇЄ][a-zа-яіїє]+)?$/
	return re.test(name)
		? ''
		: "Поле повинно містити тільки літери, перша літера мaє бути великою, а решта — маленькими, і можливий один пробіл між словами (якщо ім'я подвійне)."
}

// Валідація умов
export const validateConditions = conditions => {
	return conditions ? '' : 'Ви повинні погодитися з умовами.'
}
