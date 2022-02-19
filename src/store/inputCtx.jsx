import React, { useReducer } from 'react'
import { USERNAME } from '../helpers/constants'
import { PASSWORD } from '../helpers/constants'
import { EMAIL } from '../helpers/constants'

const InputCtx = React.createContext({})

const reducer = (state, action) => {
	switch (action.type) {
		case USERNAME:
			return { ...state, useName: action.val, isValidName: true }
		case EMAIL:
			return { ...state, email: action.val, isValidEmail: true }
		case PASSWORD:
			return { ...state, password: action.val, isValidPassword: true }
		case 'CHANGE_NAME_ERROR':
			return { ...state, isValidName: null }
		case 'CHANGE_EMAIL_ERROR':
			return { ...state, isValidEmail: null }
		case 'CHANGE_PASSWORD_ERROR':
			return { ...state, isValidPassword: null }
		case 'USER_NAME_BLUR':
			return state.isValidName === null
				? { ...state, isValidName: false }
				: state
		case 'EMAIL_BLUR':
			return state.isValidEmail === null
				? { ...state, isValidEmail: false }
				: state
		case 'PASSWORD_BLUR':
			return state.isValidPassword === null
				? { ...state, isValidPassword: false }
				: state
		case 'CLEAR_DATA':
			return init
		default:
			return state
	}
}

const init = {
	useName: '',
	email: '',
	password: '',
	isValidName: null,
	isValidEmail: null,
	isValidPassword: null,
}

export const InputProvider = ({ children }) => {
	const [state, dispatchFl] = useReducer(reducer, init)
	return (
		<InputCtx.Provider value={{ state: state, dispatch: dispatchFl }}>
			{children}
		</InputCtx.Provider>
	)
}

export default InputCtx
