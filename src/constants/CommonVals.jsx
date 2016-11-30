export const LOGIN = {
    VERIFY:  'https://login.ops.qihoo.net:4430/sec/login?ref=',
    BACKURL: '/callback?orig='    
}
export const HOSTNAME = window.location.origin

export const APPIDCOOKIE = 'DOCKERAPPID'
export const DOCKERUCOOKIE = 'DOCKERU'

export const CARDSTYLE = {
	'CARD': {
		boxShadow: '0 1px 1px rgba(0,0,0,.05)',
		borderRadius: 4
	},
	'HEADER': {
		borderBottom: '1px solid #eee',
		//marginBottom: 20
	},
	'TITLE': {
		fontSize: 18,
		color: '#666'
	},
	'LITTLEHEADER': {
		padding: '5px 20px',
		lineHeight: '32px',
		borderBottom: '1px solid #eee',
		// marginBottom: 20
	},
	'LITTLETITLE': {
		padding: 0,

		fontSize: 18,
		color: '#666'
	},
	'TEXT': {
		padding: '0 16px 20px'
	}
}

export const INPUTSTYLE = {
	'LITTLE' : {
		height: 60
	}
}