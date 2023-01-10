export const login = async (username: string, password: string) => {
    const response = await fetch ('http://localhost:9000/api/user/login', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + window.btoa(username + ":" + password),
        },
        credentials: 'include'
    });
    if(response.status !== 200) throw new Error('Login failed');
    return await response.text();
}