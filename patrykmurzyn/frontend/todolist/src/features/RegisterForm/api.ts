import { LoginFormType } from "../LoginForm/LoginForm.type";

export const register = async (form: LoginFormType) => {
    const response = await fetch ("http://localhost:9000/api/user/register", {
        method: 'POST',
        body: JSON.stringify({
            email: form.email,
            password: form.password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    if(response.status !== 201) throw new Error('Register Failed');
    return await response.text();
}