import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import FormInput from '../../components/formInput/formInput'
import { useCPFInput } from '../../hooks/useInput'


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
			<FormInput
				label='CPF'
				fullWidth
				{ ...useCPF }
			/>
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
