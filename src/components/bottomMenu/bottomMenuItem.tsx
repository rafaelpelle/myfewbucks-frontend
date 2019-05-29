import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography/'
import AttachMoneyRounded from '@material-ui/icons/AttachMoneyRounded'
import AlarmRounded from '@material-ui/icons/AlarmRounded'
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded'
import BarChartRounded from '@material-ui/icons/BarChartRounded'
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded'
import { history } from '../../router/history'
import { alizarin, belizehole, orange, nephritis } from '../../utils/theme'

const icons: any = {
	transaction: <AttachMoneyRounded />,
	reminder: <AlarmRounded />,
	account: <AccountBalanceRounded />,
	budget: <BarChartRounded />,
}

const RightIconMenuItem: React.FC<Props> = (props) => {
	const { text, icon, handleCloseMenu } = props
	const avatarStyle = avatarStyles[icon]

	function handleClick() {
		history.push('add-' + icon)
		handleCloseMenu()
	}

	return (
		<div style={ containerStyle } onClick={ handleClick }>
			<KeyboardArrowLeftRounded style={ arrowStyle } />
			<Typography style={ { ...fontStyle, textTransform: 'uppercase' } }>
				{ text }
			</Typography>
			<Avatar style={ avatarStyle }>
				{ icons[icon] }
			</Avatar>
		</div>
	)
}
export default RightIconMenuItem

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// STYLES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
const containerStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	padding: '10px 0px',
}
const fontStyle = {
	fontWeight: 600,
	fontSize: '14px',
	letterSpacing: '1px',
	marginLeft: '15px',
	marginRight: '15px',
}
const arrowStyle = {
	marginRight: 'auto',
}
const stdAvatarStyle = {
	color: 'white',
	boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
	height: '40px',
	width: '40px',
}
const avatarStyles: any = {
	transaction: { ...stdAvatarStyle, backgroundColor: alizarin },
	reminder: { ...stdAvatarStyle, backgroundColor: belizehole },
	account: { ...stdAvatarStyle, backgroundColor: orange },
	budget: { ...stdAvatarStyle, backgroundColor: nephritis },
}
//////////////////////////////////////////////////////////////////////////////
///////////////////////////////// INTERFACES /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
export type IconOptionsType = 'transaction' | 'reminder' | 'account' | 'budget'

interface OwnState {}

interface OwnProps {
	text: string
	icon: IconOptionsType
	handleCloseMenu: () => void
}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
