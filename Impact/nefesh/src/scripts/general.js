export function isAuthorised(role, permissionedRole) {
	if (permissionedRole.includes(role)) {
		// console.log("allowed")
		return true;
	} else {
		// console.log("not allowed")
		return false;
	}

	// if not 401
}
