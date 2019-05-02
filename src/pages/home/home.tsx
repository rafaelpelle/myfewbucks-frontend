import * as React from 'react'

const HomePage: React.SFC<Props> = (props) => {
	return (
		<h1>Test</h1>
	)
}
export default HomePage
/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface OwnState {}

interface OwnProps {}

interface StateProps {}

interface DispatchProps {}

type Props = StateProps & DispatchProps & OwnProps
type State = OwnState
