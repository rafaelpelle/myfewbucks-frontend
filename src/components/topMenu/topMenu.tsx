import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetTopMenuIsOpen, ISetBottomMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import TopMenuItem from './topMenuItem'


const styles = createStyles({
	container: {
		paddingTop: '15px',
		paddingRight: '20px',
		paddingBottom: '15px',
		paddingLeft: '30px',
	},
})

export interface Props extends WithStyles<typeof styles> {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: ISetTopMenuIsOpen
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

const TopMenu: React.FC<Props> = (props) => {
	const { classes, topMenuIsOpen, setTopMenuIsOpen, setBottomMenuIsOpen } = props

	function handleOnClose() {
		setTopMenuIsOpen(false)
	}

	function handleOnOpen() {
		setTopMenuIsOpen(true)
		setBottomMenuIsOpen(false)
	}

	return (
		<SwipeableDrawer
			anchor='top'
			open={ topMenuIsOpen }
			onClose={ handleOnClose }
			onOpen={ handleOnOpen }
			transitionDuration={ {
				enter: 400,
				exit: 300,
			} }
		>
			<div className={ classes.container }>
				<TopMenuItem
					text='home'
					icon='home'
					handleCloseMenu={ handleOnClose }
				/>
				<TopMenuItem
					text='transactions'
					icon='transaction'
					handleCloseMenu={ handleOnClose }
				/>
				<TopMenuItem
					text='reminders'
					icon='reminder'
					handleCloseMenu={ handleOnClose }
				/>
				<TopMenuItem
					text='accounts'
					icon='account'
					handleCloseMenu={ handleOnClose }
				/>
				<TopMenuItem
					text='settings'
					icon='settings'
					handleCloseMenu={ handleOnClose }
				/>
				<TopMenuItem
					text='logout'
					icon='logout'
					handleCloseMenu={ handleOnClose }
				/>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(TopMenu)
