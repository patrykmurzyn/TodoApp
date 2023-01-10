import Cookies from 'universal-cookie';

const useIsLogged = () => {
    const cookies = new Cookies();
    return cookies.get('auth') === 'true';
};

export default useIsLogged;
