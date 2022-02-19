import React from 'react'
import InputForm from './InputForm'
import logo from '../assets/logoo.jpg'
import classes from './LoginPage.module.css'
import AlertSuccess from './UI/Alert'

const LogingPage = () => {
	return (
		<div className={classes.loginPage}>
			<div className={classes.img}>
				<img src={logo} alt='' />
			</div>
			<div className={classes.form}>
				<AlertSuccess />
				<InputForm />
			</div>
		</div>
	)
}

export default LogingPage
