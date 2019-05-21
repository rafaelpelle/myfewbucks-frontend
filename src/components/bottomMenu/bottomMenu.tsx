import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetBottomMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'

export interface Props extends WithStyles<typeof styles> {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}


const styles = createStyles({
	container: {
		// padding: 0,
	},
})


const BottomMenu: React.FC<Props> = (props) => {
	const { classes, bottomMenuIsOpen, setBottomMenuIsOpen } = props
	return (
		<SwipeableDrawer
			anchor='bottom'
			open={ bottomMenuIsOpen }
			onClose={ () => setBottomMenuIsOpen(false) }
			onOpen={ () => setBottomMenuIsOpen(true) }
		>
			<div style={ { height: 'calc((100vh - 75px) / 2)' } }>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(BottomMenu)
