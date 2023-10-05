import { ComponentProps, ReactNode } from "react";

// COMPONENTS
interface CardProps extends ComponentProps<"div"> {
    heading: ReactNode
}

const Card = ({ heading, children, ...props }: CardProps) => (
    <div className="flex flex-col items-start gap-3" {...props}>
        <h3 className="inline text-text text-xl font-medium relative">
            {heading}
        </h3>
        <p className="text-text text-base text-start">
            {children}
        </p>
    </div>
)

export default Card