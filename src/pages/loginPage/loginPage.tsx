import * as React from 'react'
import { history } from '../../router/history'
import { wetasphalt } from '../../utils/theme'
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
				onClick={ () => history.push('/') }
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
					onClick={ () => history.push('/register') }
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
	maxWidth: '370px',
	margin: '0 auto',
	padding: '10vh 1em',
}
const buttonStyle = {
	marginTop: '40px',
}
const regiterDivStyle = {
	margin: '70px auto 30px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
}
const registerTextStyle = {
	fontSize: '16px',
	fontWeight: 600,
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
