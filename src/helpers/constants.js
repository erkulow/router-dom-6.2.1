const USERNAME = 'USERNAME_CHANGE'
const EMAIL = 'EMAIL_CHANGE'
const PASSWORD = 'PASSWORD_CHANGE'
const USERREGEXP = /['0-9']/
const EMAILREGEXP = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
)

export { USERNAME, EMAIL, PASSWORD, USERREGEXP, EMAILREGEXP }
