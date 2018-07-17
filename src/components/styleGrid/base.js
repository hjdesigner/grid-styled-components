import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1360px;	
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	box-sizing: border-box;
	&:before,
	&:after {
		content: " ";
    display: table;
	}
	&:after {
	  clear: both;
	}
`;

export const SectionContainer = Container.withComponent('section');

export const Row = styled.div`
	width: 100%;
	height: auto;
	float: left;
	box-sizing: border-box;
	&:before,
	&:after {
		content: " ";
    display: table;
	}
	&:after {
	  clear: both;
	}
`;

export const H1 =  styled.h1 `
	margin-bottom: 3rem;
	color: rgb(0, 0, 0);
	text-align: center;
	position: relative;
	&:after {
		content: "";
		width: 10%;
		height: 5px;
		position: absolute;
		left: calc(50% - 5%);
		bottom: -20px;
		background-color: rgb(70, 70, 70)
	}
`
