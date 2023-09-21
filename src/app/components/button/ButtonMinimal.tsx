import { GoArrowRight } from "react-icons/go";

type Props = {
    textColor: string;
    label: string;
}

export const ButtonMinimal = ({ textColor, label }: Props) => {
    return (
        <button className={`bg-transparent ${textColor} flex items-center font-normal`}>
            { label }
            <GoArrowRight className="ml-2 transition-all"/>
        </button>
    )
}