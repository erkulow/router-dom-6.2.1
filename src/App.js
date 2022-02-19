import { useContext } from 'react'
import './App.css'
import LogingPage from './components/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import About from './components/About'
import Profile from './components/Profile'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route>
						<Route path='/' element={<LogingPage />} />
						<Route path='/HomePage' element={<HomePage />} />
						<Route path='/About' element={<About />} />
						<Route path='/Profile' element={<Profile />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
