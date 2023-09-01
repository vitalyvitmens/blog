import {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
  updateUserRole,
} from './operations'

export const server = {
	logout,
	authorize,
	register,
	fetchUsers,
	fetchRoles,
  updateUserRole,
}
