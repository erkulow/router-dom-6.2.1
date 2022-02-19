import React, { useContext } from 'react'
import classes from './HeaderNavigation.module.css'
import InputCtx from '../../store/inputCtx'
import { NavLink } from 'react-router-dom'

const HeaderNavigation = () => {
	const { dispatch } = useContext(InputCtx)
	const clear = () => {
		dispatch({ type: 'CLEAR_DATA' })
	}
	return (
		<>
			<ul className={classes.navigation}>
				<NavLink to='/About'>About</NavLink>
				<NavLink to='/Profile'>Profile</NavLink>
				<NavLink onClick={clear} to={'/'}>
					log out
				</NavLink>
			</ul>
		</>
	)
}

export default HeaderNavigation
