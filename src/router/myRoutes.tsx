import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { iceGrey, pageHeaderHeight } from '../utils/theme'

const Suspense = React.Suspense
const HomePage = React.lazy(() => import('../pages/homePage/homePage'))
const LoginPage = React.lazy(() => import('../pages/loginPage/loginPage'))


const MyRoutes: React.FC<Props> = (props) => {
	return (
		<div style={ divStyle }>
			<Suspense fallback={ <div/> }>
				<Route exact={ true } path='/' render={ () => <HomePage /> } />
				<Route exact={ true } path='/home' render={ () => <Redirect to='/' /> } />
				<Route exact={ true } path='/login' render={ () => <LoginPage /> } />
			</Suspense>
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
