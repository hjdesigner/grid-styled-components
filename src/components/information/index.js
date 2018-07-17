import React from 'react'
import { InformationArticle, InformationP } from './style.js'

const Information = () => (
	<InformationArticle>
		<InformationP><strong>xs</strong> default</InformationP>
		<InformationP><strong>sm</strong> para tamanhos a partir de 768px</InformationP>
		<InformationP><strong>md</strong> para tamanhos a partir de 1000px</InformationP>
		<InformationP><strong>lg</strong> para tamanhos a partir de 1200px</InformationP>
	</InformationArticle>
)

export default Information
