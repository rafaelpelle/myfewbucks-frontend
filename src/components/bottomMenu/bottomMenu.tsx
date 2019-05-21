import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { ISetBottomMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import MenuItem from '../menuItem/menuItem'

export interface Props extends WithStyles<typeof styles> {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

const styles = createStyles({
	container: {
		paddingTop: '30px',
		paddingRight: '39px',
		paddingBottom: '100px',
		paddingLeft: '20px',
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
			<div className={ classes.container }>
				<MenuItem
					text='account'
					icon='account'
					iconPosition='right'
				/>
				<MenuItem
					text='budget planning'
					icon='budget'
					iconPosition='right'
				/>
				<MenuItem
					text='reminder'
					icon='reminder'
					iconPosition='right'
				/>
				<MenuItem
					text='transaction'
					icon='transaction'
					iconPosition='right'
				/>
			</div>
		</SwipeableDrawer>
	)
}

export default withStyles(styles)(BottomMenu)
