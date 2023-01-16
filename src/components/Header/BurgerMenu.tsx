import { FC } from "react";
import theme from "../../styles/theme";

interface BurgerMenuProps {
    isOpen?: boolean;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen }) => {
    return (
        <>
            <div className="hamburger">
                <div className="burger burger1" />
                <div className="burger burger2" />
                <div className="burger burger3" />
            </div>

            <style>{`
                .hamburger {
                    width: 2rem;
                    height: 1.6rem;
                    display: flex;
                    justify-content: space-around;
                    flex-flow: column nowrap;
                    z-index: 10;
                }
                .burger {
                    width: 2rem;
                    height: 0.25rem;
                    border-radius: 10px;
                    background-color: rgb(226, 35, 43);
                    transform-origin: 1px;
                    transition: all 0.3s linear;
                    background: ${theme.palette.primary.main}
                }
                .burger1 {
                    transform: ${isOpen ? "rotate(36.5deg)" : "rotate(0)"};
                }
                .burger2 {
                    opacity: ${isOpen ? 0 : 1};
                }
                .burger3 {
                    transform: ${isOpen ? "rotate(-36.5deg)" : "rotate(0)"};
                }
            `}</style>
        </>
    );
};

export default BurgerMenu;
