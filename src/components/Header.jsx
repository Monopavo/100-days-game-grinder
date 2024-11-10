import MyLogo from "/src/assets/monopavo-logo-wip.svg";
import AppLogo from "/src/assets/game-grinder-logo.svg";

const Header = () => {

return (
    <>
    <img className="breakpoints border-double border-4 border-stone-100 m-auto" src={MyLogo} alt="The Monopavo logo, which consists of a stylised, front-facing peacock with monochrome colouring and angular shapes."/>
    <img className="breakpoints  bg-slate-800 border-double border-4 border-stone-100 m-auto" src={AppLogo} alt="The Game Grinder logo, which consists of rotating gears and an industrial theme."/> 
    </>
    )
};

export default Header;