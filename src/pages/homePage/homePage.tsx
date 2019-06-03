import * as React from 'react'
import { history } from '../../router/history'
import { useCPFInput } from '../../hooks/useInput'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


export interface Props {

}

const HomePage: React.FC<Props> = (props) => {
	const useCPF = useCPFInput('')
	return (
		<div style={ containerStyle }>
			<Typography
				variant='h3'
				align='center'
				style={ textStyle }
			>
				Rafael Pelle is testing stuff here
			</Typography>
			<Button
				variant='contained'
				color='primary'
				fullWidth
				onClick={ () => history.push('/login') }
			>
				Sign in
			</Button>
		</div>
	)
}
export default HomePage

const textStyle = {
	marginTop: '1em',
	marginBottom: '2em',
}
const containerStyle = {
	padding: '1em',
}
