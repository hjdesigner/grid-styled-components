import React, { Component } from 'react';
import HeaderContainer from './components/header';
import Information from './components/information';
import { SectionContainer, Row, H1} from './components/styleGrid/base'
import { Column } from './components/styleGrid/grid'
import LineInfo from './components/lineInfo'

class App extends Component {
  render() {
		return (
			<div>
				<HeaderContainer />
				<SectionContainer>
					<Row>
						<H1>Exemplo Default</H1>
					</Row>
					<Row>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
						<Column de='1'>
							<LineInfo>de-1</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='3'>
							<LineInfo>de-3</LineInfo>
						</Column>
						<Column de='3'>
							<LineInfo>de-3</LineInfo>
						</Column>
						<Column de='3'>
							<LineInfo>de-3</LineInfo>
						</Column>
						<Column de='3'>
							<LineInfo>de-3</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='4'>
							<LineInfo>de-4</LineInfo>
						</Column>
						<Column de='4'>
							<LineInfo>de-4</LineInfo>
						</Column>
						<Column de='4'>
							<LineInfo>de-4</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='5'>
							<LineInfo>de-5</LineInfo>
						</Column>
						<Column de='5'>
							<LineInfo>de-5</LineInfo>
						</Column>
						<Column de='2'>
							<LineInfo>de-2</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='6'>
							<LineInfo>de-6</LineInfo>
						</Column>
						<Column de='6'>
							<LineInfo>de-6</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='12'>
							<LineInfo>de-12</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column de='6'>
							<Column de='6'>
								<LineInfo>de-6</LineInfo>
							</Column>
							<Column de='6'>
								<LineInfo>de-6</LineInfo>
							</Column>
						</Column>
						<Column de='6'>
							<Column de='12'>
								<LineInfo>de-12</LineInfo>
							</Column>
						</Column>
					</Row>
					<Row>
						<Column de='6'>
							<Column de='12'>
								<LineInfo>de-12</LineInfo>
							</Column>
						</Column>
						<Column de='6'>
							<Column de='12'>
								<LineInfo>de-12</LineInfo>
							</Column>
						</Column>
					</Row>
				</SectionContainer>
				<SectionContainer>
					<Row>
						<H1>Exemplo Diferentes Breakpoints</H1>
					</Row>
					<Row>
						<Information />
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
						<Column xs='12' sm='12' md='4' lg='4'>
							<LineInfo>xs-12 | sm-12 | md-4 | lg-4</LineInfo>
						</Column>
					</Row>
					<Row>
						<Column xs='6' sm='6' md='12' lg='2'>
							<LineInfo>xs-6 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
						<Column xs='6' sm='6' md='12' lg='2'>
							<LineInfo>xs-6 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
						<Column xs='12' sm='6' md='12' lg='2'>
							<LineInfo>xs-12 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
						<Column xs='12' sm='6' md='12' lg='2'>
							<LineInfo>xs-12 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
						<Column xs='6' sm='6' md='12' lg='2'>
							<LineInfo>xs-6 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
						<Column xs='6' sm='6' md='12' lg='2'>
							<LineInfo>xs-6 | sm-6 | md-12 | lg-2</LineInfo>
						</Column>
					</Row>
				</SectionContainer>
			</div>
		);
  }
}

export default App;
