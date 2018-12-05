const getRedirectPath = (action) => {
	var url = (action.type === 'genius') ? '/genius' : '/boss'
	if(!action.avatar) {
		url += 'info'
	}
	return url
}

const getSkip = (action) => {
	if(!action.avator) {
		var url = (action.type === 'genius') ? '/genius' : '/boss'
		if(!action.avatar) {
			url += 'info'
		}
		return url
	}
	const url = (action.type == 'genius') ? '/genius' : '/boss'
	return url
}

export { getRedirectPath,getSkip } 

