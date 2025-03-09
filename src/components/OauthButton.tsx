import Google from "/Google.png";
import Google2x from "/Google2x.png";
import Facebook from "/Facebook.png";
import Facebook2x from "/Facebook2x.png";
const OAuthButton = ({
  name,
  bgColor,
  margin,
}: {
  name: "GOOGLE" | "FACEBOOK";
  margin?: string;
  bgColor: string;
}) => {
  return (
    <button
      className={`${bgColor} ${margin} relative w-full h-[46px] cursor-pointer text-white josefin-sans-600 text-sm leading-[18px]`}
    >
      <img
        src={name === "GOOGLE" ? Google2x : Facebook2x}
        width={name === "GOOGLE" ? 36 : 40}
        height={name === "GOOGLE" ? 36 : 40}
        className={`absolute ${
          name === "GOOGLE" ? "left-1 top-[5px]" : "left-0.5 top-1"
        } hidden sm:block`}
      />
      <img
        src={name === "GOOGLE" ? Google : Facebook}
        width={name === "GOOGLE" ? 36 : 40}
        height={name === "GOOGLE" ? 36 : 40}
        className={`absolute  ${
          name === "GOOGLE" ? "left-1 top-[5px]" : "left-0.5 top-1"
        } sm:hidden block`}
      />
      CONTINUE WITH {name}
    </button>
  );
};
export default OAuthButton;
