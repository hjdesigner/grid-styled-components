import styled from 'styled-components';
import Config from '../styleGrid/config'

const Header = styled.header`
	width: 100%;
	padding: .5rem 1rem;
	text-align: center;
	background-image: linear-gradient(90deg, rgb(0, 255, 255), rgb(255, 0, 255));
	box-sizing: border-box;
	position: relative;	
`
export const Title = styled.h1`
	color: rgb(255, 255, 255);
	font-weight: 600;
	font-size: 1.2rem;
	text-transform: uppercase;
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		font-size: 1.5rem;
	}
`
export const Text = styled.p`
	font-size: .8rem;
	color: rgba(255, 255, 255);
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		font-size: 1rem;
	}
`

export const Github = styled.div`
	width: 30px;
	position: absolute;
	z-index: 10;
	top: 5px;
	right: 5px;
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		width: 50px
		top: 10px;
		right: 10px;
	}
`
export const Link = styled.a`
	width: 100%;
	display: inline-block;
`

export const Image = styled.img`
	width: auto;
	max-width: 100%;
	height: auto !important;
`

export default Header
