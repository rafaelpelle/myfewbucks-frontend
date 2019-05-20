import * as React from 'react'
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import { purple, red } from '@material-ui/core/colors'

const styles = (theme: Theme) =>
	createStyles({
		formControl: {
			marginTop: '30px',
		},
		customLabel: {
			opacity: 0.5,
			fontWeight: 600,
			fontSize: '1em',
			margin: '10px 15px',
			color: 'black',
			zIndex: 99999,
		},
		customLabelFocused: {
			marginTop: 0,
			fontSize: '1em',
			letterSpacing: '1px',
		},
		customInput: {
			boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 5px rgba(0, 0, 0, 0.15)',
			borderRadius: '7px',
			padding: '15px 15px',
			border: 'none',
			backgroundColor: '#ffffff',
		},
	})

export interface Props extends WithStyles<typeof styles> {
	// prop1: string
	// prop2: boolean
}

const CustomInput: React.FC<Props> = (props) => {
	const { classes } = props

	return (
		<FormControl fullWidth className={ classes.formControl }>
			<InputLabel
				htmlFor='custom-standard-input'
				classes={ {
					root: classes.customLabel,
					focused: classes.customLabelFocused,
				} }
			>
				NAME
			</InputLabel>
			<Input
				id='custom-standard-input'
				disableUnderline
				classes={ {
					input: classes.customInput,
				} }
			/>
		</FormControl>
	)
}

export default withStyles(styles)(CustomInput)
