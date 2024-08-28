import Link from "next/link";
import { useState } from "react";

type Props = {
    label: string;
    icon?: React.ReactElement;
    labelColor?: string;
    href: string;
    onClick?: () => void;
};

export const ComboOption = ({ label, icon, labelColor, href, onClick }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleMouseEnter = () => {
        setIsFocused(true);
    };

    const handleMouseLeave = () => {
        setIsFocused(false);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <Link
            onClick={onClick}
            role="menuitem"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onBlur={handleBlur}
            className={`flex items-center w-full py-1.5 px-3 relative h-max gap-2 transition-all hover:bg-gray-800 hover:rounded-lg ${labelColor} ${isFocused ? "bg-gray-800 rounded-lg" : ""
                }`}
            href={href}
            tabIndex={0}
            aria-label={label}
        >
            {icon}{label}
        </Link>
    )
}