import * as React from 'react'
import TextField from '@material-ui/core/TextField'


const FormInput: React.FC<Props> = (props) => {
	const {
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
		<div>
			<TextField
				name={ name }
				value={ value }
				label={ label }
				placeholder={ placeholder }
				helperText={ error }
				autoFocus={ autoFocus }
				disabled={ disabled }
				fullWidth={ fullWidth }
				error={ error.length > 0 }
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
export default FormInput

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
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

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
