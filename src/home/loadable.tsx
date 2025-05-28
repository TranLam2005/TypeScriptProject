import React from "react";
import Loader from "../components/loading/LoadingPage";
import { lazyload } from "../logic/utils/lazyload";

export const HomePage = lazyload(
    () => import("./HomePage"),
    (module) => module.default,
    {
        fallback: <Loader />,
    }
)