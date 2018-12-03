const getRedirectPath = (action) => {
	const url = (action.type === 'genius') ? '/genius' : '/boss'
	if(!action.avatar) {
		url += 'info'
	}
	return url
}

const getSkip = (action) => {
	const url = (action.type == 'genius') ? '/genius' : '/boss'
	return url
}

export { getRedirectPath,getSkip } 

