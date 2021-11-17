import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	footer        : {
		backgroundColor : '#0F2841',
		color           : '#fff'
	},

	nav           : {
		backgroundColor : '#fff',
		color           : '#515151',
		boxShadow       : 'none'
	},

	global        : {
		marginTop : '10vh',
		textAlign : 'center'
	},
	foodItemImage : {
		backgroundImage : 'url(https://unsplash.com/photos/PKH_tWEGuPA)',
		border          : '1px solid black'
	}
});

export default useStyles;
