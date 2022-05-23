import { useState, useEffect } from "react";
import LogoOutside from "../components/logo";
import FooterOutside from "../components/footer";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

type Profile = {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
};

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  // const [registrar, setRegistrar] = useState([])

  // useEffect(() => {
  //   axios.post('apiURL')
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // })

  async function createUser() {
    const response = await api.post("/users/new", {
      nomeUsuario: name,
      emailUsuario: email,
      senhaUsuario: password,
    });
    if (response.status === 409) {
      alert("Usuário já existe!");
      navigate("/");
    } else {
      alert("Usuário cadastrado!");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-96 max-w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8 flex flex-col">
          <LogoOutside />
          <form
            className="mt-8 space-y-6"

            // action="#"
            // method="PUT?"
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <p className="text-sm py-2">Nome</p>
                <input
                  id="name"
                  type="text"
                  // name="name"
                  autoComplete="name"
                  // {...register("name", {
                  //   required: 'Nome é necessário', // JS only: <p>error message</p> TS only support string
                  //   pattern: {
                  //     value: /^[a-zA-Z]/i,
                  //     message: "Apenas letras"
                  //   }
                  // })}
                  // required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Digite seu nome"
                  onChange={(e) => setName(e.target.value)}
                />
                {/* {errors.name ? (
                  <>
                    {errors.name.type === "required" && (
                      <p style={{ color: "red", fontSize: "15px" }}>
                        {errors.name.message}
                      </p>
                    )}
                    {errors.name.type === "pattern" && (
                      <p style={{ color: "red", fontSize: "15px" }}>
                        {errors.name.message}
                      </p>
                    )} */}
                {/* </>
                ) : null} */}
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <p className="text-sm py-2">Email</p>
                <input
                  id="email"
                  // name="email-address"

                  autoComplete="email"
                  // {...register("email", {
                  //   required: 'Insira seu e-mail corretamente', // JS only: <p>error message</p> TS only support string
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  //     message: "exemplo@ex.ex"
                  //   }
                  // })}
                  // required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* {errors.email ? (
                <>
                  {errors.email.type === "required" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.email.message}
                    </p>
                  )}
                  {errors.email.type === "pattern" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.email.message}
                    </p>
                  )}
                </>
              ) : null} */}
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <p className="text-sm py-2">Senha</p>
                <input
                  id="password"
                  // name="password"
                  type="password"
                  autoComplete="current-password"
                  //CONSERTAR O 'pattern.value'
                  //COMPONETIZAR
                  // {...register("password", // JS only: <p>error message</p> TS only support
                  //   {
                  //     required: 'Insira a senha',
                  //     pattern: {
                  //       value: /^[0-9a-zA-Z]{4,16}/i,
                  //       message: "A senha deve conter de 4-8 dígitos com uma pelo menos letra minúscula, uma maiúscula, e pelo menos um número"
                  //     }
                  //   })}
                  // pattern="[0-9a-zA-Z]{4,8}"
                  // title="A senha deve conter de 4-8 dígitos com uma pelo menos letra minúscula, uma maiúscula, e pelo menos um número"
                  // required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Crie uma senha"
                />
                {/* {errors.password ? (
                <>
                  {errors.password.type === "required" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password.type === "pattern" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.password.message}
                    </p>
                  )}
                </>
              ) : null} */}
              </div>

              <div>
                <label
                  // htmlFor="check-password"
                  className="sr-only"
                >
                  Check Password
                </label>
                <p className="text-sm py-2">Confirmar Senha</p>
                <input
                  id="check-password"
                  // name="check-password"
                  type="password"
                  autoComplete="current-password"
                  //fazer a validação de senhas iguais direito
                  // {...register("checkPassword", {
                  //   required: 'As senhas precisam estar idênticas', // JS only: <p>error message</p> TS only support
                  //   pattern: {
                  //     value: /^[0-9a-zA-Z]{4,8}/i, //igual ao 'password'
                  //     message: "As senhas precisam estar idênticas"
                  //   }
                  // })}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow-sm"
                  placeholder="Confirme sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* {errors.checkPassword ? (
                <>
                  {errors.checkPassword.type === "required" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.checkPassword.message}
                    </p>
                  )}
                  {errors.checkPassword.type === "pattern" && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.checkPassword.message}
                    </p>
                  )}
                </>
              ) : null} */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-lime-400 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={(e) => {
                  e.preventDefault(), createUser();
                }}
              >
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-Slate-50 group-hover:text-Zinc-50" aria-hidden="true" />
                </span> */}
                Criar Conta
              </button>
              <div className="flex items-center justify-center text-sm pt-4">
                Já possui uma conta?
                <div className="text-sm px-1">
                  <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Entrar
                  </a>
                </div>
              </div>
            </div>
          </form>
          <FooterOutside />
        </div>
      </div>
    </div>
  );
}
