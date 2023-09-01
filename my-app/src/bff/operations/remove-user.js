import { deleteUser } from '../api'
import { sessions } from '../sessions'
import { ROLE } from '../constants'

export const removeUser = async (userSession, userId) => {
	const accessRoles = [ROLE.ADMIN]

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещён',
			res: null,
		}
	}

	deleteUser(userId)

	return {
		error: null,
		res: true,
	}
}
