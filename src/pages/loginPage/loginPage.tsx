import * as React from 'react'
import LoginForm from '../../components/loginForm/loginForm'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const LoginPage: React.FC<Props> = (props) => {
	return (
		<div style={ containerStyle }>
			<LoginForm />
			<Button
				variant='text'
				color='primary'
				style={ { ...buttonStyle, textTransform: 'none' } }
				fullWidth
			>
				Forgot password?
			</Button>
			<div style={ regiterDivStyle }>
				<Typography
					style={ registerTextStyle }
					color='primary'
				>
					Don't have an account?
				</Typography>
				<Button
					variant='contained'
					color='primary'
					// size='large'
					// style={ buttonStyle }
					// fullWidth
				>
					CREATE
				</Button>
			</div>
		</div>
	)
}
export default LoginPage

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	margin: '20px',
	paddingTop: '20vh',
}
const buttonStyle = {
	marginTop: '40px',
}
const regiterDivStyle = {
	margin: '100px 00px 30px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}
const registerTextStyle = {
	fontSize: '16px',
	fontWeight: 700,
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
