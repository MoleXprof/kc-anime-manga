type ToolTipProps = {
    text: string;
}

const ToolTip = ({ text }: ToolTipProps) => {
    return (
        <span className="absolute font-semibold bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-tooltip text-white text-sm whitespace-nowrap px-2 py-1 rounded pointer-events-none transition-opacity duration-150 z-50">
            {text}
            <span className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-2 h-2 bg-tooltip rotate-45"></span>
        </span>
    )
}

export default ToolTip;