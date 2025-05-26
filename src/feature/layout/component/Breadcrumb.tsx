import { ChevronRight, Home } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="text-sm text-muted-foreground">
            <ol>
                <li>
                    <Link to="/">
                        <Home className="w-4 h-4" />
                    </Link>
                </li>
                {items.map(item => (
                    <li key={item.label} className="inline-flex items-center gap-1">
                        <span><ChevronRight className="w-4 h-4" /></span>
                        {item.path ?
                            (<Link to={item.path!}>{item.label}</Link>)
                            :
                            (<span>{item.label}</span>)
                        }
                    </li>
                ))}
            </ol>

        </nav>
    )
}

export default Breadcrumb;
