import * as React from 'react'
import { ISetBottomMenuIsOpen, ISetTopMenuIsOpen } from '../../utils/interfaces'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/AddRounded'


const FloatingAddButton: React.FC<Props> = (props) => {
	const { bottomMenuIsOpen, setBottomMenuIsOpen, setTopMenuIsOpen } = props
	const isVisible = window.location.hash === '#/'

	function handleClick() {
		setBottomMenuIsOpen(!bottomMenuIsOpen)
		setTopMenuIsOpen(false)
	}

	return (
		<div>
			{ isVisible &&
				<Fab
					color='primary'
					style={ { ...fabStyle, position: 'absolute' } }
					onClick={ handleClick }
				>
					<AddIcon style={ bottomMenuIsOpen ? clearIconStyle : addIconStyle } />
				</Fab>
			}
		</div>
	)
}
export default FloatingAddButton

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const fabStyle = {
	bottom: '30px',
	right: '30px',
	zIndex: 1301,
}
const addIconStyle = {
	transition: 'transform .2s ease-in-out',
}
const clearIconStyle = {
	transition: 'transform .2s ease-in-out',
	transform: 'rotate(45deg)',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	bottomMenuIsOpen: boolean
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
	setTopMenuIsOpen: ISetTopMenuIsOpen
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
