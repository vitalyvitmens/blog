import { styled } from "styled-components"

const FooterContainer = ({ className }) => <footer className={className}>Футер</footer>

export const Footer = styled(FooterContainer)`
	height: 120px;
	background-color: blue;
`
