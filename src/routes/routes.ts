import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
    children?: Route[]
}

// const LazyLoad = lazy( () => import(/*webpackChunkName: "LazyLoad"*/'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        path:"/lazyload",
        Component: lazy( () => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoad Nested'
    },
    {
        path:"/no-lazy",
        Component: NoLazy,
        name: 'No Lazy Loading'
    }
];