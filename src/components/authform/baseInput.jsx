import { SModalInput } from "./authform.styled";

const BaseInput = ({
   id,
   name,
   placeholder = "",
   type = "text",
   error = false,
   onChange,

}) => {
   return (
      <SModalInput
         id={id}
         name={name}
         type={type}
         placeholder={placeholder}
         $error={error}
         onChange={onChange}
      />
   );
};

export default BaseInput;