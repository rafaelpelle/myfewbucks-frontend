import * as React from 'react'
import { ISetTopMenuIsOpen, ISetBottomMenuIsOpen } from '../../utils/interfaces'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificatiosActiveIcon from '@material-ui/icons/NotificationsActiveRounded'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNoneRounded'
import { pageHeaderHeight } from '../../utils/theme'


const PageHeader: React.FC<Props> = (props) => {
	const { topMenuIsOpen, setTopMenuIsOpen, setBottomMenuIsOpen} = props
	const text = 'MyFewBucks'
	const hasNotification = false

	function handleMenuClick() {
		setTopMenuIsOpen(!topMenuIsOpen)
		setBottomMenuIsOpen(false)
	}

	return (
		<div style={ containerStyle }>
			<AppBar
				position='fixed'
				color='secondary'
				style={ appBarStyle }
			>
				<Toolbar style={ toolbarStyle }>
					<IconButton style={ menuButtonStyle } onClick={ handleMenuClick }>
						<MenuIcon />
					</IconButton>
					<Typography align='center' style={ textStyle }>
						{ text }
					</Typography>
					<IconButton style={ notificationButtonStyle }>
						{ hasNotification ? <NotificatiosActiveIcon /> : <NotificationsNoneIcon /> }
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	)
}
export default PageHeader

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	flexGrow: 1,
}
const appBarStyle = {
	// The TopMenu has z-index: 1300
	zIndex: 1301,
	height: pageHeaderHeight,
	boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
}
const toolbarStyle = {
	height: pageHeaderHeight,
	padding: 0,
}
const textStyle = {
	flexGrow: 1,
	letterSpacing: '2px',
	fontWeight: 600,
	fontSize: '15px',
}
const menuButtonStyle = {
	padding: '20px',
}
const notificationButtonStyle = {
	padding: '20px',
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {
	topMenuIsOpen: boolean
	setTopMenuIsOpen: ISetTopMenuIsOpen
	setBottomMenuIsOpen: ISetBottomMenuIsOpen
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
