import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FormInput from '../../components/formInput/formInput'
import { useCPFInput } from '../../hooks/useInput'

const styles = createStyles({
	pageContainer: {
		padding: '1em',
	},
	header: {
		marginTop: '1em',
		marginBottom: '2em',
	}
})

export interface Props extends WithStyles<typeof styles> { }

const HomePage: React.FC<Props> = (props) => {
	const { classes } = props
	const useCPF = useCPFInput('')
	return (
		<div className={ classes.pageContainer }>
			<Typography
				variant='h3'
				align='center'
				className={ classes.header }
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
export default withStyles(styles)(HomePage)
