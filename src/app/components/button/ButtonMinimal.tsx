import { GoArrowRight } from "react-icons/go";

type Props = {
    textColor: string;
    label: string;
    backgroundColor?: string;
}

export const ButtonMinimal = ({ textColor, label, backgroundColor }: Props) => {
    return (
        <button className={`${backgroundColor ?? "bg-transparent"} ${textColor} flex items-center font-normal`}>
            { label }
            <GoArrowRight className="ml-2 transition-all"/>
        </button>
    )
}