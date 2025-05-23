import React, {useState, useEffect} from "react";
import {CloudAlert} from "lucide-react";
import { cn } from "clsx-tailwind-merge";
import LoadingPage from "../loading/LoadingPage";

type ImageLoaderProps = React.ImgHTMLAttributes<HTMLImageElement>;

const ImageLoader: React.FC<ImageLoaderProps> = ({
    src,
    alt,
    className,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        if (!src) {
            setHasError(true);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        setHasError(false);
        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoading(false);
            return;
        }
        img.onload = () => {
            setIsLoading(false);
        }
        img.onerror = () => {
            setHasError(true);
            setIsLoading(false);
        }
    }, [src]);

    if (isLoading) {
        return <LoadingPage />
    }
    
    if (hasError) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <CloudAlert className="h-10 w-10 text-gray-400" />
            </div>
        )
    }
    return (
        <img 
            src={src}
            alt={alt ?? "Image"}
            className={cn("object-cover", className)}
            loading={props.loading ?? "lazy"}
            decoding={props.decoding ?? "async"}
            {...props}
        />
    )
}

export default ImageLoader;