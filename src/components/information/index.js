import React from 'react'
import { InformationArticle, InformationP } from './style.js'

const Information = () => (
	<InformationArticle>
		<InformationP><strong>xs</strong> menor que 768px</InformationP>
		<InformationP><strong>sm</strong> acima de 768px</InformationP>
		<InformationP><strong>md</strong> acima de 1000px</InformationP>
		<InformationP><strong>lg</strong> acima de 1200px</InformationP>
	</InformationArticle>
)

export default Information
