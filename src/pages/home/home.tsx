import * as React from 'react'
import Typography from '@material-ui/core/Typography'

const HomePage: React.FC<Props> = (props) => {
	return (
		<div>
			<Typography variant='h1' align='center'>
				Rafael
			</Typography>
			<Typography variant='h1' align='center'>
				Pelle
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
