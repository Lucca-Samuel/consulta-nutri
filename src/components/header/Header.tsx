import { useEffect, useState } from "react";
import "@/app/globals.css";
import "./style.css";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  UserPlus,
  SquareMenu,
  LogOut,
  Check,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { verificarUsuarioLogado } from "@/services/localStorageService"; // Importe a função de verificação

function Header() {
  const [usuarioLogado, setUsuarioLogado] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState<"cliente" | "medico" | null>(
    null,
  );

  useEffect(() => {
    // Verifica se o usuário está logado no localStorage e pega o tipo de usuário
    const { tipo, usuario } = verificarUsuarioLogado();
    if (usuario) {
      setUsuarioLogado(usuario.email); // Ou qualquer outro campo que você queira exibir
      setTipoUsuario(tipo); // Atualiza o tipo de usuário
    }

    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 425); // Ajuste para o tamanho desejado
    };

    // Verifica o tamanho da tela na montagem
    checkScreenSize();

    // Adiciona o ouvinte de resize
    window.addEventListener("resize", checkScreenSize);

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleLogout = () => {
    // Função de logout que limpa o usuário logado
    localStorage.removeItem("usuarioLogado");
    setUsuarioLogado(null);
    setTipoUsuario(null); // Limpa o tipo de usuário ao fazer logout

    window.location.href = "/pages/login";
  };

  // Define o link para "Minha Área" com base no tipo de usuário
  const minhaAreaLink =
    tipoUsuario === "medico"
      ? "/pages/homeEspecialista/"
      : "/pages/HomeAgenda/";

  return (
    <div className="header sombra fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-white">
      <div className="flex-shrink-0">
        <Link href={"/"}>
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>
      </div>
      <div className="flex flex-grow justify-center">
        {/* Menu a ser exibido caso a tela seja maior que 425px */}
        {!isMobile && (
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="
                  #sobre"
                  className="text-green-500 hover:text-green-700"
                >
                  Sobre
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#nutrologo_nutri"
                  className="text-green-500 hover:text-green-700"
                >
                  Nutrólogo e Nutricionista
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#questionario"
                  className="text-green-500 hover:text-green-700"
                >
                  Questionário
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#calculadora"
                  className="text-green-500 hover:text-green-700"
                >
                  Calculadora
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#receitas"
                  className="text-green-500 hover:text-green-700"
                >
                  Receitas
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#planos"
                  className="text-green-500 hover:text-green-700"
                >
                  Planos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        {/* Menu a ser exibido caso a tela seja igual ou menor que 425px */}
        {isMobile && (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="flex text-green-500 hover:text-green-700">
              itens
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Links</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Sobre</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Nutrólogo e Nutricionista</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Questionário</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Calculador</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Receitas</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-green-500 hover:text-green-700">
                <Link href={"#"}>Planos</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="text-orange hover:bg-laranja mr-10 h-10 w-10 rounded-full hover:text-white">
          <User size={40} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="mr-2">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {usuarioLogado ? (
            <>
              <DropdownMenuItem>
                <Check />
                <span>Logado: {usuarioLogado}</span>
              </DropdownMenuItem>
              <Link href={minhaAreaLink}>
                <DropdownMenuItem>
                  <SquareMenu />
                  <span>Minha Área</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut />
                <span>Log Out</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <Link href={"/pages/login"}>
                <DropdownMenuItem>
                  <User />
                  <span>Login</span>
                </DropdownMenuItem>
              </Link>
              <Link href={"/pages/quest"}>
                <DropdownMenuItem>
                  <UserPlus />
                  <span>Cadastre-se</span>
                </DropdownMenuItem>
              </Link>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Header;
