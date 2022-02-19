import React from 'react'
import Logo from '../../assets/logoo.jpg'
import HeaderNavigation from './HeaderNavigation'
import classes from './Header.module.css'

const Header = () => {
	return (
		<header className={classes.header}>
			<h2>Peaksoft House</h2>
			<HeaderNavigation />
		</header>
	)
}

export default Header
