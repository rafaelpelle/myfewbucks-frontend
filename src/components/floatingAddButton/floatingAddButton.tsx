import * as React from 'react'
import { ISetBottomMenuIsOpen, ISetTopMenuIsOpen } from '../../utils/interfaces'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/AddRounded'

const styles = createStyles({
	fab: {
		position: 'absolute',
		bottom: '30px',
		right: '30px',
		zIndex: 1301,
	},
	addIcon: {
		transition: 'transform .2s ease-in-out',
	},
	clearIcon: {
		transition: 'transform .2s ease-in-out',
		transform: 'rotate(45deg)',
	},
})

export interface Props extends WithStyles<typeof styles> {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
	setTopMenuIsOpen: ISetTopMenuIsOpen
}

const FloatingAddButton: React.FC<Props> = (props) => {
	const { classes, bottomMenuIsOpen, setBottomMenuIsOpen, setTopMenuIsOpen } = props

	function handleClick() {
		setBottomMenuIsOpen(!bottomMenuIsOpen)
		setTopMenuIsOpen(false)
	}

	return (
		<Fab
			color='primary'
			className={ classes.fab }
			onClick={ handleClick }
		>
			<AddIcon className={ bottomMenuIsOpen ? classes.clearIcon : classes.addIcon } />
		</Fab>
	)
}

export default withStyles(styles)(FloatingAddButton)
