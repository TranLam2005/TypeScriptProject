import React from "react";
import { Home, Search } from "lucide-react";
interface IconOptions {
    value: string;
    label: React.ReactNode;
}

const iconMap = {
    Home,
    Search,

};

const iconOptions: IconOptions[] = [
    {
        value: "home",
        label: <Home />
    },
    {
        value: "search",
        label: <Search />
    }
]

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
    icon: string;
}

const DynamicIcons = ({icon, ...props}: DynamicIconProps): React.ReactNode => {
    const IconComponent = iconMap[icon as keyof typeof iconMap];
    return IconComponent ? <IconComponent {...props} /> : null;
}
