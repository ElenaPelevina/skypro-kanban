import { useNavigate } from "react-router-dom"
import { SAWrapper, SContainerSignUp, SModal, SModalBlock, SModalTtl, SModalTtlH2, SModalFormLogin, SModalInput, SModalBtnSignUpEnt, SModalBtnSignUpentA, SModalFormGroup, SModalFormGroupA, SModalFormGroupP  } from "./authform.styled"
import { signIn, signUp } from "../../services/auth"

const AuthForm = ({isSignUp, setIsAuth}) => {
	const navigate = useNavigate()
	const handleLogin = (e) => {
		e.preventDefault()
		setIsAuth(true)
		navigate("/")
	}

// 	const [formData, setFormData] = useState({
//       name: "",
//       login: "",
//       password: "",
//    });

//    const [errors, setErrors] = useState({
//       name: "",
//       login: "",
//       password: "",
//    });

//     const [error, setError] = useState("");

//     const validateForm = () => {
//       const newErrors = { name: "", login: "", password: "" };
//       let isValid = true;

//       if (isSignUp && !formData.name.trim()) {
//          newErrors.name = true;
//          setError("Заполните все поля");
//          isValid = false;
//       }

//       if (!formData.login.trim()) {
//          newErrors.login = true;
//          setError("Заполните все поля");
//          isValid = false;
//       }

//       if (!formData.password.trim()) {
//          newErrors.password = true;
//          setError("Заполните все поля");
//          isValid = false;
//       }

//       setErrors(newErrors);
//       return isValid;
//    };

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({
//          ...formData,
//          [name]: value,
//       });
//       setErrors({ ...errors, [name]: false });
//       setError("");
//    };

//    const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (!validateForm()) {
//          return;
//       }
//    try { 
//       const data = !isSignUp
//          ? await signIn({ login: formData.login, password: formData.password })
//          : await signUp(formData);

//       if (data) {
//          setIsAuth(true);
//          localStorage.setItem("userInfo", JSON.stringify(data));
//          navigate("/");
//       }
//       } catch (err) {
//          setError(err.message);
//       }
//    };

    return (
    <SAWrapper>
        <SContainerSignUp>
            <SModal>
				<SModalBlock>
					<SModalTtl>
						<SModalTtlH2>{isSignUp ? "Регистрация" : "Вход"}</SModalTtlH2>
					</SModalTtl>
					<SModalFormLogin id="formLogUp" action="#">
                        {isSignUp && (
						<SModalInput type="text" name="first-name" id="first-name" placeholder="Имя"/>
                        )}
						<SModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"/>
						<SModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"/>
						<SModalBtnSignUpEnt onClick={handleLogin} id="SignUpEnter"><SModalBtnSignUpentA>{isSignUp ? "Зарегистрироваться" : "Войти"}</SModalBtnSignUpentA> </SModalBtnSignUpEnt>
						<SModalFormGroup>
							{isSignUp && (
                                <SModalFormGroupP>Уже есть аккаунт?  <SModalFormGroupA to="/login">Войдите здесь</SModalFormGroupA></SModalFormGroupP>
                            )}
                            {!isSignUp && (
                                <SModalFormGroupP>Нужно зарегистрироваться? <SModalFormGroupA to="/registration">Регистрируйтесь здесь</SModalFormGroupA></SModalFormGroupP>
                            )}
						</SModalFormGroup>
					</SModalFormLogin>
				</SModalBlock> 
			</SModal>
        </SContainerSignUp>
    </SAWrapper>  
    )
}

export default AuthForm