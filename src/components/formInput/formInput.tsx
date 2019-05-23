import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = createStyles({
	container: {},
	textField: {},
})

export interface Props extends WithStyles<typeof styles> {
	name?: string
	rawValue?: string
	value?: string
	placeholder?: string
	label?: string
	error?: string,
	maxLength?: number
	autoFocus?: boolean
	disabled?: boolean
	fullWidth?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

const FormInput: React.FC<Props> = (props) => {
	const {
		classes,
		name,
		value,
		placeholder,
		label,
		error,
		maxLength,
		autoFocus,
		disabled,
		fullWidth,
		onChange,
		onClick,
		onKeyUp,
		onBlur,
	} = props

	return (
		<div className={ classes.container }>
			<TextField
				className={ classes.textField }
				name={ name }
				value={ value }
				label={ label }
				placeholder={ placeholder }
				helperText={ error }
				autoFocus={ autoFocus }
				disabled={ disabled }
				fullWidth={ fullWidth }
				error={ error.length > 0 }
				// onChange={ onChange }
				inputProps={ {
					maxLength,
					onChange,
					onClick,
					onKeyUp,
					onBlur,
				} }
			/>
		</div>
	)
}

export default withStyles(styles)(FormInput)
