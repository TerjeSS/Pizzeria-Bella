import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
	createStyles({
		'@global' : {
			html                     : {
				'-webkit-font-smoothing'  : 'antialiased',
				'-moz-osx-font-smoothing' : 'grayscale',
				height                    : '100%',
				width                     : '100%',
				fontFamily                : 'Poppins',
				fontWeight                : '300'
			},
			'*, *::before, *::after' : {
				boxSizing : 'inherit'
			},
			body                     : {
				height     : '100%',
				width      : '100%',
				fontFamily : 'Poppins',
				fontWeight : '300'
			},
			'#root'                  : {
				height     : '100%',
				width      : '100%',
				fontWeight : '300'
			},

			h1                       : {
				fontSize   : '40px',
				fontWeight : '400'
			},

			h2                       : {
				fontSize : '30px'
			},

			p                        : {
				fontSize : '16px'
			},

			span                     : {
				fontSize : '12px',
				padding  : '5px 10px'
			},
			a                        : {
				fontSize : '16px'
			}
		}
	})
);

const GlobalStyles = () => {
	useStyles();

	return null;
};

export default GlobalStyles;
