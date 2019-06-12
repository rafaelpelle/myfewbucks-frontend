import * as React from 'react'
import { useEmailInput, usePasswordInput } from '../../hooks/useInput'
import { requestUserLogin } from '../../utils/httpClient'
import FormInput from '../formInput/formInput'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const LoginForm: React.FC<Props> = (props) => {
	const useEmail = useEmailInput('')
	const usePassword = usePasswordInput('')

	async function handleLogin() {
		const email = useEmail.value
		const password = usePassword.value
		const anyError = useEmail.error || usePassword.error
		const anyEmpty = email.length === 0 || password.length === 0
		if (!anyError && !anyEmpty) {
			const response = await requestUserLogin(email, password)
		} else {
			// Snackbar the error
		}
	}

	return (
		<div style={ containerStyle }>
			<Typography
				style={ textStyle }
				color='primary'
			>
				Sign in
			</Typography>
			<FormInput
				label='EMAIL'
				fullWidth
				style={ emailInputStyle }
				{ ...useEmail }
			/>
			<FormInput
				label='PASSWORD'
				fullWidth
				style={ passwordInputStyle }
				{ ...usePassword }
			/>
			<Button
				variant='contained'
				color='primary'
				size='large'
				style={ buttonStyle }
				onClick={ handleLogin }
				fullWidth
			>
				SIGN IN
			</Button>
		</div>
	)
}
export default LoginForm

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	maxWidth: '370px',
	margin: '0 auto',
}
const textStyle = {
	fontSize: '26px',
	fontWeight: 700,
}
const emailInputStyle = {
	marginTop: '25px',
}
const passwordInputStyle = {
	marginTop: '15px',
}
const buttonStyle = {
	marginTop: '40px',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {
}

interface OwnProps {
}

interface StateProps {
}

interface DispatchProps {
}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
