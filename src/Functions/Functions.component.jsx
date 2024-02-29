export const isLoggedIn = () => {
	return localStorage.getItem( 'token' );
};

export const getUserName = () => (
	localStorage.getItem( 'userName' )
);

export function tokenLoader() {
    const token = localStorage.getItem("token");

    if (!token) {
        return null;
    }

    return token;
}