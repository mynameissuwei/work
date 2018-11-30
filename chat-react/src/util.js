export function getRedirectPath(action) {
	let url = (action.type === 'genius')?'/genius':'/boss'
	if(!action.avatar) {
		url += 'info'
	}
	return url
}  