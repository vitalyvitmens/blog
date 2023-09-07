import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useServerRequest } from '../../../../hooks'
import { Icon } from '../../../../components'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { styled } from 'styled-components'

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			})
		)
	}

	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" size="18px" margin="0 7px 0 0" />
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				<Icon id="fa-trash-o" size="21px" onClick={() => onPostRemove(id)} />
			</div>
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
`
