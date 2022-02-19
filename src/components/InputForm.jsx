import React, { useContext } from 'react'
import classes from './InputForm.module.css'
import Button from './UI/Button'
import Input from './UI/Input'
import InputCtx from '../store/inputCtx'
import { EMAILREGEXP, USERREGEXP } from '../helpers/constants'
import { useNavigate } from 'react-router-dom'
import HomePage from './HomePage'

const InputForm = () => {
	const { dispatch, state } = useContext(InputCtx)
	const navigate = useNavigate()

	const onChangeUserInputHandler = (e) => {
		if (USERREGEXP.test(e.target.value)) {
			dispatch({ type: 'USERNAME_CHANGE', val: e.target.value })
		} else {
			dispatch({ type: 'CHANGE_NAME_ERROR' })
		}
	}

	const onChangeEmailInputHandler = (e) => {
		if (EMAILREGEXP.test(e.target.value)) {
			dispatch({ type: 'EMAIL_CHANGE', val: e.target.value })
		} else {
			dispatch({ type: 'CHANGE_EMAIL_ERROR' })
		}
	}

	const onChangePasswordInputHandler = (e) => {
		if (e.target.value.trim().length >= 5) {
			let prevPassword = e.target.value.slice(0, 2)
			let password = e.target.value.split('').reverse().join('')
			dispatch({ type: 'PASSWORD_CHANGE', val: password + prevPassword })
		} else {
			dispatch({ type: 'CHANGE_PASSWORD_ERROR' })
		}
	}

	const onSubmit = (e) => {
		e.preventDefault()
		return navigate('/HomePage')
	}

	return (
		<>
			<form onSubmit={onSubmit} className={classes.form}>
				<h3>Login</h3>
				<div>
					<Input
						onBlur={() => {
							dispatch({ type: 'USER_NAME_BLUR' })
						}}
						name='userName'
						placeholder='userName'
						type='text'
						onChange={onChangeUserInputHandler}
						valid={state.isValidName}
					/>
				</div>
				<div>
					<Input
						onBlur={() => {
							dispatch({ type: 'EMAIL_BLUR' })
						}}
						name='email'
						placeholder='email'
						type='email'
						onChange={onChangeEmailInputHandler}
						valid={state.isValidEmail}
					/>
				</div>
				<div>
					<Input
						onBlur={() => {
							dispatch({ type: 'PASSWORD_BLUR' })
						}}
						name='password'
						placeholder='password'
						type='password'
						onChange={onChangePasswordInputHandler}
						valid={state.isValidPassword}
					/>
				</div>
				<div>
					<Button
						disabled={
							state.isValidEmail &&
							state.isValidPassword &&
							state.isValidName
								? false
								: true
						}
						type='submit'
						className={classes.login}
					>
						login
					</Button>
				</div>
				<h6>forgot password ?</h6>
			</form>
		</>
	)
}

export default InputForm
