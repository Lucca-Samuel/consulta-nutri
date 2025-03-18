// "use client";

// import { useState } from "react";
// import InputField from "@/components/inputs/input";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import Button from "@/components/Button/button";
// import {
//   fazerLogin,
//   verificarUsuarioLogado,
// } from "@/services/localStorageService";
// import "@/app/globals.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [erro, setErro] = useState<string | null>(null); // Para exibir mensagens de erro

//   const handleLogin = () => {
//     const sucesso = fazerLogin(email, senha);
//     if (sucesso) {
//       const { tipo, usuario } = verificarUsuarioLogado();
//       if (tipo && usuario) {
//         alert(`Login bem-sucedido como ${tipo}: ${usuario.email}`);
//       }
//       window.location.href = "/"; // Redireciona após login
//     } else {
//       setErro("Credenciais inválidas. Por favor, tente novamente.");
//     }
//   };

//   return (
//     <div className="container mx-auto flex min-h-screen items-center justify-center">
//       <div className="w-full max-w-md space-y-4 rounded-lg border bg-white p-6 text-center shadow-md">
//         <h1 className="text-2xl font-bold">Faça Login com:</h1>

//         {/* Botões de Login com Google e Apple */}
//         <div className="space-y-2">
//           <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
//             <FcGoogle className="mr-2" size={20} /> Fazer login com Google
//           </button>
//           <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
//             <FaApple className="mr-2" size={20} /> Fazer login com Apple
//           </button>
//         </div>

//         {/* Linha divisória com "OU" */}
//         <div className="my-4 flex items-center">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="px-2 text-gray-500">OU</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>

//         {/* Campos de entrada */}
//         <div className="space-y-3">
//           <InputField
//             placeholder="Digite seu e-mail"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//           />
//           <InputField
//             placeholder="Senha"
//             type="password"
//             onChange={(e) => setSenha(e.target.value)}
//             value={senha}
//           />
//         </div>

//         {/* Exibindo erro de login */}
//         {erro && <div className="mt-2 text-sm text-red-500">{erro}</div>}

//         <Button
//           texto={"Login"}
//           estilo={"bg-verde botao-verde mt-4 w-full rounded-md py-2"}
//           funcao={handleLogin}
//         />

//         {/* Link para cadastro */}
//         <p className="mt-4 text-sm text-gray-500">
//           Não tem uma conta?{" "}
//           <a
//             href="/pages/cadastroClie"
//             className="text-blue-500 hover:underline"
//           >
//             Cadastre-se
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

"use client";

import { useState } from "react";
import InputField from "@/components/inputs/input";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Button from "@/components/Button/button";
import { fazerLogin, verificarUsuarioLogado } from "@/services/authService"; // Importação atualizada
import "@/app/globals.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null); // Para exibir mensagens de erro

  const handleLogin = () => {
    const sucesso = fazerLogin(email, senha);
    if (sucesso) {
      const { tipo, usuario } = verificarUsuarioLogado();
      if (tipo && usuario) {
        alert(`Login bem-sucedido como ${tipo}: ${usuario.email}`);
      }
      window.location.href = "/"; // Redireciona após login
    } else {
      setErro("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <div className="container mx-auto flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-4 rounded-lg border bg-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold">Faça Login com:</h1>

        {/* Botões de Login com Google e Apple */}
        <div className="space-y-2">
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
            <FcGoogle className="mr-2" size={20} /> Fazer login com Google
          </button>
          <button className="flex w-full items-center justify-center rounded-md border border-gray-300 py-2 hover:bg-gray-100">
            <FaApple className="mr-2" size={20} /> Fazer login com Apple
          </button>
        </div>

        {/* Linha divisória com "OU" */}
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-500">OU</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Campos de entrada */}
        <div className="space-y-3">
          <InputField
            placeholder="Digite seu e-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <InputField
            placeholder="Senha"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </div>

        {/* Exibindo erro de login */}
        {erro && <div className="mt-2 text-sm text-red-500">{erro}</div>}

        <Button
          texto={"Login"}
          estilo={"bg-verde botao-verde mt-4 w-full rounded-md py-2"}
          funcao={handleLogin}
        />

        {/* Link para cadastro */}
        <p className="mt-4 text-sm text-gray-500">
          Não tem uma conta?{" "}
          <a
            href="/pages/cadastroClie"
            className="text-blue-500 hover:underline"
          >
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
