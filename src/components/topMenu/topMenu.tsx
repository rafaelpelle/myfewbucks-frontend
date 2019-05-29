import * as React from 'react'
import { ISetTopMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import TopMenuItem from './topMenuItem'


const TopMenu: React.FC<Props> = (props) => {
	const { topMenuIsOpen, setTopMenuIsOpen } = props

	function handleOnClose() {
		setTopMenuIsOpen(false)
	}

	function handleOnOpen() {
		setTopMenuIsOpen(true)
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
			<div style={ containerStyle }>
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
export default TopMenu

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	paddingTop: '15px',
	paddingRight: '20px',
	paddingBottom: '15px',
	paddingLeft: '30px',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: ISetTopMenuIsOpen
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
