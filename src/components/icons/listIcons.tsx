import { Bell, CircleHelp, Globe } from "lucide-react";
import React from "react";

const HelpIcon = () => {
    return <CircleHelp className="w-4 h-4"/>
}

const BellIcon = () => {
    return <Bell className="w-4 h-4"/>
}

const LanguageIcon = () => {
    return <Globe className="w-4 h-4"/>
}

export { HelpIcon, BellIcon, LanguageIcon }