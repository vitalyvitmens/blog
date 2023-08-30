import { useDispatch } from 'react-redux'
import { Icon } from '../../../../components'
import { TableRow } from '../table-row/table-row'
import styled from 'styled-components'

const UserRowContainer = ({
	className,
	login,
	registeredAt,
	roleId: userRoleId,
}) => {
	const dispatch = useDispatch()

	const roles = []

	const onRoleChange = () => {}

	return (
		<TableRow>
			<div className="user-data">
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>

				<div className="role-column">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						onClick={() => dispatch(/* TODO */)}
					></Icon>
				</div>
			</div>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onClick={() => dispatch(/* TODO */)}
			></Icon>
		</TableRow>
	)
}

export const UserRow = styled(UserRowContainer)`
`
