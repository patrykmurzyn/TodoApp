export const logout = async () => {
    const response = await fetch ('http://localhost:9000/api/user/logout', {
        method: 'POST',
        credentials: 'include'
    });
    if(response.status !== 200) throw new Error('Logout failed');
    return await response.text();
}