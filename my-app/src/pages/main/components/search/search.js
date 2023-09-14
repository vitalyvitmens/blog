import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, Input } from '../../../../components'

const SearchContainer = ({ className, searchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input
				value={searchPhrase}
				placeholder="Поиск по заголовкам..."
				onChange={onChange}
			/>
			<Icon inactive={true} id="fa-search" size="21px" />
		</div>
	)
}
export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	width: 340px;
	height: 40px;
	margin: 40px auto 0;

	& > input {
		padding: 10px 36px 10px 10px;
		font-size: 21px;
	}

	& > div {
		position: absolute;
		top: 3px;
		right: 9px;
	}
`

Search.propTypes = {
	searchPhrase: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
}
