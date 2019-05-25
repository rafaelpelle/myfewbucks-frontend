import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetBottomMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import BottomMenuItem from './bottomMenuItem'

export interface Props extends WithStyles<typeof styles> {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

const styles = createStyles({
	container: {
		paddingTop: '10px',
		paddingRight: '38px',
		paddingBottom: '95px',
		paddingLeft: '20px',
	},
})

const BottomMenu: React.FC<Props> = (props) => {
	const { classes, bottomMenuIsOpen, setBottomMenuIsOpen } = props

	function handleOnClose() {
		setBottomMenuIsOpen(false)
	}

	function handleOnOpen() {
		setBottomMenuIsOpen(true)
	}

	return (
		<SwipeableDrawer
			anchor='bottom'
			open={ bottomMenuIsOpen }
			onClose={ handleOnClose }
			onOpen={ handleOnOpen }
			transitionDuration={ {
				enter: 400,
				exit: 300,
			} }
		>
			<div className={ classes.container }>
				<BottomMenuItem
					text='account'
					icon='account'
					handleCloseMenu={ handleOnClose }
				/>
				<BottomMenuItem
					text='budget'
					icon='budget'
					handleCloseMenu={ handleOnClose }
				/>
				<BottomMenuItem
					text='reminder'
					icon='reminder'
					handleCloseMenu={ handleOnClose }
				/>
				<BottomMenuItem
					text='transaction'
					icon='transaction'
					handleCloseMenu={ handleOnClose }
				/>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(BottomMenu)
