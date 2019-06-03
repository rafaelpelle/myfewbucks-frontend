import * as React from 'react'

const lazy = React.lazy
const Suspense = React.Suspense

function LazyImport(Component: any) {
	const ComponentLoadable = lazy(Component)
	return (props: any) => (
		<Suspense fallback={ <div>Loading...</div> }>
			<ComponentLoadable { ...props } />
		</Suspense>
	)
}

export default LazyImport
