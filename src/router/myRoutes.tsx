import * as React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { IRootReducer } from '../utils/interfaces'
import HomePage from '../pages/home/home'

class MyRoutes extends React.Component<Props, State> {
	render() {
		return (
			<div>
				<Route exact={ true } path='/' component={ HomePage } />
			</div>
		)
	}
}
const mapStateToProps = (state: IRootReducer) => ({})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch)
export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(MyRoutes)

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
