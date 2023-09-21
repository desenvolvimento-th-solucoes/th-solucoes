import { useState } from "react";

type Props = {
    label: string;
    location?: string;
    icon?: React.ReactElement;
    labelColor?: string;
    onClick?: () => void;
};  

export const ComboOption = ({ label, location, icon, labelColor, onClick }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsFocused(true);
    };

    const handleMouseLeave = () => {
        setIsFocused(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (onClick) onClick();
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return(
        <a 
            role="menuitem"
            onClick={onClick}
            onKeyPress={handleKeyPress}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
            className={`flex items-center w-full py-1.5 px-3 relative h-max gap-2 transition-all hover:bg-gray-800 hover:rounded-lg ${labelColor} ${
                isFocused ? "bg-gray-800 rounded-lg" : ""
            }`}
            href={location}
            tabIndex={0}
            aria-label={label}
        >
            {icon}{label}
        </a>
    )
}