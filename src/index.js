import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { InputProvider } from './store/inputCtx'

ReactDOM.render(
	<InputProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</InputProvider>,
	document.getElementById('root'),
)
