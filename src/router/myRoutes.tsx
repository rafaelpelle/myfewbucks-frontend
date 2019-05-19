import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { iceGrey, pageHeaderHeight } from '../utils/theme'
import HomePage from '../pages/home/home'


interface IProps {
	// empty
}

const MyRoutes: React.FC<IProps> = (props) => {
	return (
		<div style={ divStyle } >
			<Route exact={ true } path='/' component={ HomePage } />
		</div>
	)
}

export default MyRoutes

/////////////////////////////////////////////////////////////////
//////////////////////////// STYLES /////////////////////////////
/////////////////////////////////////////////////////////////////
const divStyle = {
	backgroundColor: iceGrey,
	paddingTop: pageHeaderHeight,
}
