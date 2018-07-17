import styled from 'styled-components';
import Config from '../styleGrid/config'

const Header = styled.header`
	width: 100%;
	padding: .5rem 1rem;
	text-align: center;
	background-color: rgb(0, 0, 0);
	box-sizing: border-box;
	h1 {
		color: rgb(255, 255, 255);
		font-weight: 600;
		font-size: 1.2rem;
		text-transform: uppercase;
	}
	p {
		font-size: .8rem;
		color: rgba(255, 255, 255);
	}
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		h1 {
			font-size: 1.5rem;
		}
		p {
			font-size: 1rem;	
		}
	}
`
export default Header
