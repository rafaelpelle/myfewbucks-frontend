import * as React from 'react'
import { ISetBottomMenuIsOpen } from '../../utils/interfaces'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import BottomMenuItem from './bottomMenuItem'


const BottomMenu: React.FC<Props> = (props) => {
	const { bottomMenuIsOpen, setBottomMenuIsOpen } = props

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
			<div style={ containerStyle }>
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
export default BottomMenu


//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	paddingTop: '10px',
	paddingRight: '38px',
	paddingBottom: '95px',
	paddingLeft: '20px',
}

//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
