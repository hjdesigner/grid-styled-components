import styled from 'styled-components';

export const Container = styled.div`
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
	margin-bottom: 20px;
	color: rgb(0, 0, 0)
`
