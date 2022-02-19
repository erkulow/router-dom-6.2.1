import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import ReactDOM from 'react-dom'

const Alerttt = () => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				This is a success alert — check it out!
			</Alert>
		</Stack>
	)
}

const AlertSuccess = () => {
	return ReactDOM.createPortal(
		<Alerttt />,
		document.getElementById('LoginPage'),
	)
}

export default AlertSuccess
