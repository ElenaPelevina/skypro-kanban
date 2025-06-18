import { useNavigate } from "react-router-dom"
import { SAWrapper, SContainerSignUp, SModal, SModalBlock, SModalTtl, SModalTtlH2, SModalFormLogin, SModalInput, SModalBtnSignUpEnt, SModalFormGroup, SModalFormGroupA, SModalFormGroupP, SErrorMessage  } from "./authform.styled"
import { signIn, signUp } from "../../services/auth"
import { useState } from "react"
import BaseInput from "./baseInput"

const AuthForm = ({isSignUp, setIsAuth}) => {
  
	const navigate = useNavigate()

	const [formData, setFormData] = useState({
      name: "",
      login: "",
      password: "",
   });

   const [errors, setErrors] = useState({
      name: false,
      login: false,
      password: false,
   });

    const [error, setError] = useState("");

    const validateForm = () => {
      const newErrors = { name: false, login: false, password: false };
      let isValid = true;

      if (isSignUp && !formData.name.trim()) {
         newErrors.name = true;
         setError("Заполните все поля");
         isValid = false;
      }

      if (!formData.login.trim()) {
         newErrors.login = true;
         setError("Заполните все поля");
         isValid = false;
      }

      if (!formData.password.trim()) {
         newErrors.password = true;
         setError("Заполните все поля");
         isValid = false;
      }

      setErrors(newErrors);
      return isValid;
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value,
      });
      setErrors({ ...errors, [name]: false });
      setError("");
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
         return;
      }
   try { 
      const data = !isSignUp
         ? await signIn({ login: formData.login, password: formData.password })
         : await signUp(formData);

      if (data) {
         setIsAuth(true);
         localStorage.setItem("userInfo", JSON.stringify(data));
         navigate("/");
      }
      } catch (err) {
         setError(err.message);
      }
   };

    return (
    <SAWrapper>
        <SContainerSignUp>
            <SModal>
				<SModalBlock>
					<SModalTtl>
						<SModalTtlH2>{isSignUp ? "Регистрация" : "Вход"}</SModalTtlH2>
					</SModalTtl>
					<SModalFormLogin onSubmit={handleSubmit} id="formLogUp" action="#">
                        {isSignUp && (
						<BaseInput error={errors.name} onChange={handleChange} type="text" name="first-name" id="first-name" placeholder="Имя" value={formData.name}/>
                        )}
						<BaseInput error={errors.login} onChange={handleChange} type="text" name="login" id="loginReg" placeholder="Эл. почта" value={formData.login}/>
						<BaseInput error={errors.password} onChange={handleChange} type="password" name="password" id="passwordFirst" placeholder="Пароль" value={formData.password}/>
                  <SErrorMessage>{error}</SErrorMessage>
						<SModalBtnSignUpEnt id="SignUpEnter">{isSignUp ? "Зарегистрироваться" : "Войти"}</SModalBtnSignUpEnt>
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