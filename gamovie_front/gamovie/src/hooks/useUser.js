import Context from "context/userContext"
import { useCallback, useContext, useState } from "react";
import loginService from "services/login"


export default function useUser() {
    const { currentUser, setCurrentUser } = useContext(Context);
    const [state, setState] = useState({ loading: false, error: false });

    const login = useCallback(({ username, password }) => {
        loginService({ username, password })
            .then(currentUser => {
                setState({ loading: true, error: false })
                setCurrentUser(currentUser);
            })
            .catch(err => {
                setState({ loading: false, error: true })
                console.error(err);
            })
    }, [setCurrentUser]);

    const logout = useCallback(() => {
        setCurrentUser(null);
    }, [setCurrentUser]);

    return {
        isLogged: Boolean(currentUser),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout
    };
}