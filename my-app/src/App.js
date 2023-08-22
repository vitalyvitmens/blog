import styled from 'styled-components'

const Div = styled.div`
	text-align: center;
`

export const App = () => {
	return (
		<Div>
			<i className="fa fa-calendar fa-2x"></i>
			<div>123</div>
			<i className="fa fa-camera-retro fa-3x"></i>
		</Div>
	)
}
