import { generateDate } from './generate-date'
import { ROLE } from '../constants'

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: generateDate(),
			role_id: ROLE.READER,
		}),
	}).then((createdUser) => createdUser.json())
