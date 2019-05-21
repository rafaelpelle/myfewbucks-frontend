import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { IHandleTopMenu } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'


const styles = createStyles({
	container: {
		// padding: 0,
	},
})

export interface Props extends WithStyles<typeof styles> {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: IHandleTopMenu
}

const TopMenu: React.FC<Props> = (props) => {
	const { classes, topMenuIsOpen, setTopMenuIsOpen } = props
	return (
		<SwipeableDrawer
			anchor='top'
			open={ topMenuIsOpen }
			onClose={ () => setTopMenuIsOpen(false) }
			onOpen={ () => setTopMenuIsOpen(true) }
		>
			<div style={ { height: 'calc((100vh - 75px) / 2)' } }>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(TopMenu)
