import styled from 'styled-components';
import Config from './config'

function getWidthGrid(gridWidth) {
	if (!gridWidth) return;

	let width = gridWidth / 12 * 100;
	return `width: ${width}%;`;
}

export const Column = styled.div`
	float: left;
	padding: ${Config.paddingGrid};
	min-height: 1px;
	box-sizing: border-box;
	${({ de }) => (de ? getWidthGrid(de) : 'width: 100%')}
	
	@media only screen and (max-width: ${Config.breakPointTablet}) {
		${({ xs }) => xs && getWidthGrid(xs)}
	} 
	@media only screen and (min-width: ${Config.breakPointTablet}) {
		${({ sm }) => sm && getWidthGrid(sm)}
	} 
	@media only screen and (min-width: ${Config.breakPointDesktop}) {
		${({ md }) => md && getWidthGrid(md)}
	}
	@media only screen and (min-width: ${Config.breakPointLargeDesktop}) {
		${({ lg }) => lg && getWidthGrid(lg)}
	}
`;

export const ColumnSection = Column.withComponent('section');
