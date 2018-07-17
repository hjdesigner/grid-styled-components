import React, { Component } from 'react';
import HeaderContainer from './components/header';
import Information from './components/information';
import { SectionContainer, Row, H1} from './components/styleGrid/base'
import { Column } from './components/styleGrid/grid'
import LineInfo from './components/styleGrid/lineInfo'

class App extends Component {
  render() {
		return (
			<div>
				<HeaderContainer />
				<Information />
				<SectionContainer>
					<Row>
						<H1>Exemplo Default</H1>
					</Row>
					<Row>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
						<Column xs='1'>
							<LineInfo>xs-1</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='3'>
							<LineInfo>xs-3</LineInfo>
						</Column>
						<Column xs='3'>
							<LineInfo>xs-3</LineInfo>
						</Column>
						<Column xs='3'>
							<LineInfo>xs-3</LineInfo>
						</Column>
						<Column xs='3'>
							<LineInfo>xs-3</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='4'>
							<LineInfo>xs-4</LineInfo>
						</Column>
						<Column xs='4'>
							<LineInfo>xs-4</LineInfo>
						</Column>
						<Column xs='4'>
							<LineInfo>xs-4</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='5'>
							<LineInfo>xs-5</LineInfo>
						</Column>
						<Column xs='5'>
							<LineInfo>xs-5</LineInfo>
						</Column>
						<Column xs='2'>
							<LineInfo>xs-2</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='6'>
							<LineInfo>xs-6</LineInfo>
						</Column>
						<Column xs='6'>
							<LineInfo>xs-6</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='12'>
							<LineInfo>xs-12</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='6'>
							<Column xs='6'>
								<LineInfo>xs-6</LineInfo>
							</Column>
							<Column xs='6'>
								<LineInfo>xs-6</LineInfo>
							</Column>
						</Column>
						<Column xs='6'>
							<Column xs='12'>
								<LineInfo>xs-12</LineInfo>
							</Column>
						</Column>
					</Row>
					<Row>
						<Column xs='6'>
							<Column xs='12'>
								<LineInfo>xs-12</LineInfo>
							</Column>
						</Column>
						<Column xs='6'>
							<Column xs='12'>
								<LineInfo>xs-12</LineInfo>
							</Column>
						</Column>
					</Row>
				</SectionContainer>
				<SectionContainer>
					<Row>
						<H1>Exemplo Diferentes Breakpoints</H1>
					</Row>
					<Row>
						<Column xs='6' sm='12' md='6' lg='12'>
							<LineInfo>xs-6 | sm-12 | md-6 | lg-12</LineInfo>
						</Column>
						<Column xs='6' sm='12' md='6' lg='12'>
							<LineInfo>xs-6 | sm-12 | md-6 | lg-12</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='12' sm='6' md='4' lg='4'>
							<LineInfo>xs-12 | sm-6 | md-4 | lg-4</LineInfo>
						</Column>
						<Column xs='12' sm='6' md='4' lg='4'>
							<LineInfo>xs-12 | sm-6 | md-4 | lg-4</LineInfo>
						</Column>
					</Row>
				</SectionContainer>
			</div>
		);
  }
}

export default App;
