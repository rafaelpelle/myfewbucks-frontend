import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { createStyles, withStyles, WithStyles } from '@material-ui/core'
import { IHandleTopMenu } from '@src/utils/interfaces'

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
	return (
		<div className={ classes.pageContainer }>
			<Typography
				variant='h3'
				align='center'
				className={ classes.header }
			>
				Rafael Pelle is testing stuff here
			</Typography>
			<TextField
				label='Full Name'
				fullWidth
			/>
		</div>
	)
}
export default withStyles(styles)(HomePage)
