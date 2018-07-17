import styled from 'styled-components';
import Config from '../styleGrid/config'

export const InformationArticle = styled.article`
	background-color: rgb(247, 245, 245);
	padding: .5rem;
	text-align: center;
	@media only screen and (min-width: ${Config.breakPointLargeDesktop}) {
		display: flex;
		justify-content: space-around;
	}
`
export const InformationP = styled.p`
	width: 100%;
	display: inline-block;
	margin: 0 0 .2rem;
	box-sizing: border-box;
	color: rgb(0, 0, 0);
	font-size: .9rem;
	&:last-child {
		margin-bottom: 0;
	}
	strong {
		font-size: 1.1rem;
	}
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		font-size: 1rem;
	}
	@media only screen and (min-width: ${Config.breakPointLargeDesktop}) {
		font-size: 1.1rem;
		margin: 0;
		width: auto;
	}
`
