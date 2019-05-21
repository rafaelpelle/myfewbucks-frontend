import { createMuiTheme, Theme } from '@material-ui/core/styles'

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
export const appTheme = (theme: Theme) =>
	createMuiTheme({
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
					opacity: 0.5,
					fontWeight: 600,
					letterSpacing: '1px',
					textTransform: 'uppercase',
					margin: '10px 15px',
					color: 'black',
					zIndex: 1,
				},
				focused: {
					marginTop: 0,
				},
				filled: {
					marginTop: 0,
				},
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
				input: {
					boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15), 0px 0px 5px rgba(0, 0, 0, 0.15)',
					borderRadius: '7px',
					fontWeight: 600,
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
