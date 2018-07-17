import styled, { keyframes } from 'styled-components';

const widthBefore = keyframes`
  from {
		width: 0;
  }
  to {
		width: 100%;
  }
`;

const LineInfo = styled.span`
	position: relative;
	display: block;
	box-sizing: border-box;
	padding: .8em 0;
	text-align: center;
	color: #000;
	font-weight: 600;
	&:before {
		content: '';
		width: 100%;
		height: 5px;
		position: absolute;
		top: 0;
		left: 0;
		background-image: linear-gradient(90deg, rgb(0, 255, 255), rgb(255, 0, 255));
		animation: ${widthBefore} 1s ease-out;
	}
`

export default LineInfo;
