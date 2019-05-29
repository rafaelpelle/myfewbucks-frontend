import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

////////////////////////////////////////////////////////////////////////
//////////////////////////////// COLORS ////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const alizarin = '#E74C3C'
export const belizehole = '#2980B9'
export const coral = '#FF6B6B'
export const greensea = '#16A085'
export const orange = '#F39C12'
export const nephritis = '#27AE60'
export const wetasphalt = '#34495E'
export const wisteria = '#8E44AD'
export const iceGrey = '#f3f3f3'

////////////////////////////////////////////////////////////////////////
//////////////////////////////// SIZES /////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const pageHeaderHeight = '65px'

////////////////////////////////////////////////////////////////////////
////////////////////////////// APP THEME ///////////////////////////////
////////////////////////////////////////////////////////////////////////
export const appTheme = createMuiTheme({
	palette: {
		primary: {
			main: wetasphalt,
		},
		secondary: {
			main: iceGrey,
		},
	},
	typography: {
		useNextVariants: true,
		fontFamily: [
			'Montserrat',
			'"Helvetica Neue"',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiFormLabel: {
			root: {
				fontWeight: 600,
				fontSize: '14px',
				letterSpacing: '1px',
				textTransform: 'uppercase',
				margin: '10px 15px',
				color: 'black',
				zIndex: 1,
				"&$focused": {
					fontSize: '16px',
					marginTop: 0,
				},
			},
			error: {
				fontSize: '16px',
				fontWeight: 800,
				marginTop: 0,
			},
			filled: {
				fontSize: '16px',
				marginTop: 0,
			},
		},
		MuiFormHelperText: {
			root: {
				margin: '10px 15px',
				fontWeight: 600,
			}
		},
		MuiInput: {
			underline: {
				'&:after': {
					borderBottom: 'none',
				},
				'&:before': {
					borderBottom: 'none',
				},
				'&:hover:not(.MuiInput-disabled-141):not(.MuiInput-focused-140):not(.MuiInput-error-143):before': {
					borderBottom: 'none',
				},
				'&.MuiInput-underline-144:hover:not(.MuiInput-disabled-143):not(.MuiInput-focused-142):not(.MuiInput-error-145):before': {
					borderBottom: 'none',
				},
			},
			error: {
				// border: '2px solid ' + alizarin,
				// borderRadius: '7px',
				// boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 5px rgba(0, 0, 0, 0.15)',
				// fontWeight: 500,
				// color: alizarin,
			},
			input: {
				boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 5px rgba(0, 0, 0, 0.15)',
				borderRadius: '7px',
				fontWeight: 500,
				padding: '15px',
				backgroundColor: '#ffffff',
			},
		},
		MuiDrawer: {
			paperAnchorTop: {
				marginTop: pageHeaderHeight,
			},
		},
	},
})

