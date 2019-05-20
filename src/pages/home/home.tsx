import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

const HomePage: React.FC<Props> = (props) => {
	return (
		<div style={ { padding: '1em' } }>
			<TextField
				label='Full Name'
				fullWidth
			/>
			<Typography variant='h3' align='center'>
				Rafael Pelle is testing stuff here
			</Typography>
		</div>
	)
}
export default HomePage
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
