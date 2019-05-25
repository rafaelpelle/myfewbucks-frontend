import * as React from 'react'
import { history } from '../../router/history'
import { Avatar, Typography } from '@material-ui/core'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles'
import { alizarin, belizehole, orange, nephritis, wetasphalt } from '../../utils/theme'
import {
	AttachMoneyRounded,
	AlarmRounded,
	AccountBalanceRounded,
	BarChartRounded,
	KeyboardArrowLeftRounded,
} from '@material-ui/icons'

export type IconOptionsType = 'transaction' | 'reminder' | 'account' | 'budget'

export interface Props extends WithStyles<typeof styles> {
	text: string
	icon: IconOptionsType
	handleCloseMenu: () => void,
}

const styles = createStyles({
	container: {
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		padding: '10px 0px',
	},
	font: {
		fontWeight: 600,
		fontSize: '14px',
		letterSpacing: '1px',
		textTransform: 'uppercase',
		marginLeft: '15px',
		marginRight: '15px',
	},
	leftArrow: {
		marginRight: 'auto',
	},
})

const icons: any = {
	transaction: <AttachMoneyRounded />,
	reminder: <AlarmRounded />,
	account: <AccountBalanceRounded />,
	budget: <BarChartRounded />,
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


const RightIconMenuItem: React.FC<Props> = (props) => {
	const { classes, text, icon, handleCloseMenu } = props
	const avatarStyle = avatarStyles[icon]

	function handleClick() {
		history.push('add-' + icon)
		handleCloseMenu()
	}

	return (
		<div className={ classes.container } onClick={ handleClick }>
			<KeyboardArrowLeftRounded className={ classes.leftArrow } />
			<Typography className={ classes.font }>{ text }</Typography>
			<Avatar style={ avatarStyle }>{ icons[icon] }</Avatar>
		</div>
	)
}

export default withStyles(styles)(RightIconMenuItem)
