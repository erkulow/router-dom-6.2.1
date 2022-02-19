import React from 'react'
import Header from './Layout/Header'
import SectionHomePage from './Layout/SectionHomePage'
import classes from './HomePage.module.css'


const HomePage = () => {
	return (
		<div className={classes.HomePage}>
			<Header />
			<SectionHomePage />
		</div>
	)
}

export default HomePage
