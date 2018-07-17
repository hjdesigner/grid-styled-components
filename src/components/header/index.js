import React from 'react';
import Header, { Title, Text, Github, Link, Image } from './style.js';
import logoGithub from './github.png';

const HeaderContainer = () => (
	<Header>
		<Title>Simples Grid</Title>
		<Text>Um sistema de grid simples, porém responsivo, usando React.js com Styled Components</Text>
		<Github>
			<Link href='https://github.com/hjdesigner/grid-styled-components'>
				<Image src={logoGithub} alt='Github' />
			</Link>
		</Github>
	</Header>
)

export default HeaderContainer
