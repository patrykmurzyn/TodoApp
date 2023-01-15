export const login = async (username: string, password: string) => {
    const response = await fetch ('http://localhost:9000/api/user/login', {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + window.btoa(username + ":" + password),
        },
        credentials: 'include'
    });
    if(response.status !== 200) throw new Error('Wrong username or password.');
    return await response.text();
}