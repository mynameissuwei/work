export function getRedirectPath(action) {
	let url = (action.type === 'SuperHero')?'/SuperHero':'/Human'
	if(!action.avatar) {
		url += 'info'
	}
	return url
}  