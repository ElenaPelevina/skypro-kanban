import AuthForm from "../components/authform/authform"

export const LoginPage = ({ setIsAuth }) => {
    return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
}