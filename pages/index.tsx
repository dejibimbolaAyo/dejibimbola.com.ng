import React, { ReactElement } from 'react'
import Employment from '../components/Employment'
import FunWorks from '../components/FunWorks'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Recommendation from '../components/Recommendation'
import Resume from '../components/Resume'
import Skills from '../components/Skills'
import Works from '../components/Works'

interface Props {

}

export default function IndexPage({ }: Props): ReactElement {
	return (
		<Layout title="Home">
			<Hero></Hero>
			<Skills></Skills>
			<Works></Works>
			<FunWorks></FunWorks>
			<Employment></Employment>
			<Recommendation></Recommendation>
			<Resume></Resume>
		</Layout>
	)
}
