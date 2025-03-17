import Image from "next/image";
import "./style.css";
import Link from "next/link";

const HeaderOut = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="borda fixed top-0 z-50 flex h-20 w-3/4 items-center justify-center bg-white">
        <div className="flex-shrink-0">
          {" "}
          <Link href={"/"}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={150}
              height={100}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderOut;
