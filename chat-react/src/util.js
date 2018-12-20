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
  url = (action.type === 'genius') ? '/genius' : '/boss'
	return url
}

const getChatId = (userId,targetId) => {
	return [userId,targetId].sort().join('_')
}

const getLast = (array) => {
	return array[array.length - 1]
}

export { getRedirectPath,getSkip,getChatId,getLast } 

