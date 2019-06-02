import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { iceGrey, pageHeaderHeight } from '../utils/theme'
import HomePage from '../pages/homePage/homePage'
import LoginPage from '../pages/loginPage/loginPage'


const MyRoutes: React.FC<Props> = (props) => {
	return (
		<div style={ divStyle }>
			<Route
				exact={ true }
				path='/'
				component={ HomePage }
			/>
			<Route
				exact={ true }
				path='/home'
				render={ () => <Redirect to='/'/> }
			/>
			<Route
				exact={ true }
				path='/login'
				component={ LoginPage }
			/>
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
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
