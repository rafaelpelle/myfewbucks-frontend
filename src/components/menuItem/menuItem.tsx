import * as React from 'react'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { alizarin, belizehole, orange, nephritis, wetasphalt, wisteria } from '../../utils/theme'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/HomeRounded'
import MoneyIcon from '@material-ui/icons/AttachMoneyRounded'
import AlarmIcon from '@material-ui/icons/AlarmRounded'
import AccountIcon from '@material-ui/icons/AccountBalanceRounded'
import SettingsIcon from '@material-ui/icons/SettingsRounded'
import ChartIcon from '@material-ui/icons/BarChartRounded'
import ExitIcon from '@material-ui/icons/ExitToAppRounded'
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRightRounded'
import ArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeftRounded'


export type IconPositionType = 'right' | 'left'
export type IconOptionsType = 'home' | 'transaction' | 'reminder' | 'account' | 'settings' | 'budget' | 'logout'

export interface Props extends WithStyles<typeof styles> {
	text: string
	icon: IconOptionsType
	iconPosition?: IconPositionType
}

const styles = createStyles({
	container: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		margin: '20px 0px',
	},
	avatar: {
	},
	font: {
		fontWeight: 600,
		fontSize: '14px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		marginLeft: '15px',
		marginRight: '15px',
	},
	rightArrow: {
		marginLeft: 'auto',
	},
	leftArrow: {
		marginRight: 'auto',
	}
})

const icons: any = {
	home: <HomeIcon />,
	transaction: <MoneyIcon />,
	reminder: <AlarmIcon />,
	account: <AccountIcon />,
	settings: <SettingsIcon />,
	budget: <ChartIcon />,
	logout: <ExitIcon />,
}

const getAvatarStyle = (icon: IconOptionsType) => {
	const stardardStyle = {
		color: 'white',
		boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
		height: '40px',
		width: '40px',
	}
	switch (icon) {
		case 'home': return { ...stardardStyle, backgroundColor: wisteria }
		case 'transaction': return { ...stardardStyle, backgroundColor: alizarin }
		case 'reminder': return { ...stardardStyle, backgroundColor: belizehole }
		case 'account': return { ...stardardStyle, backgroundColor: orange }
		case 'settings': return { ...stardardStyle, backgroundColor: wetasphalt }
		case 'budget': return { ...stardardStyle, backgroundColor: nephritis }
		case 'logout': return { ...stardardStyle, backgroundColor: alizarin }
		default: return { ...stardardStyle, backgroundColor: wetasphalt }
	}
}

const MenuItem: React.FC<Props> = (props) => (
	props.iconPosition === 'right' ?
		<RightIconMenuItem { ...props } /> : <LeftIconMenuItem { ...props } />
)

const LeftIconMenuItem: React.FC<Props> = (props) => {
	const { classes, text, icon } = props
	const avatarStyle = getAvatarStyle(icon)
	return (
		<div className={ classes.container }>
			<Avatar style={ avatarStyle }>
				{ icons[icon] }
			</Avatar>
			<Typography className={ classes.font }>
				{ text }
			</Typography>
			<ArrowRightIcon className={ classes.rightArrow }/>
		</div>
	)
}

const RightIconMenuItem: React.FC<Props> = (props) => {
	const { classes, text, icon } = props
	const avatarStyle = getAvatarStyle(icon)
	return (
		<div className={ classes.container }>
			<ArrowLeftIcon className={ classes.leftArrow }/>
			<Typography className={ classes.font }>
				{ text }
			</Typography>
			<Avatar style={ avatarStyle }>
				{ icons[icon] }
			</Avatar>
		</div>
	)
}

export default withStyles(styles)(MenuItem)
