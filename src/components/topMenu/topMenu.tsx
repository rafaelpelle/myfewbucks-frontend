import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetTopMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuItem from '../menuItem/menuItem'


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
			<div className={ classes.container }>
				<MenuItem
					text='account'
					icon='account'
				/>
				<MenuItem
					text='budget planning'
					icon='budget'
				/>
				<MenuItem
					text='reminder'
					icon='reminder'
				/>
				<MenuItem
					text='transaction'
					icon='transaction'
				/>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(TopMenu)
