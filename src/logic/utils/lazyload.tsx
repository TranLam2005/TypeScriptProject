import React, {lazy, Suspense} from "react";
import type {ComponentType, JSX} from 'react'

interface LazyLoadOptions {
    fallback?: React.ReactNode;
    errorBoundary?: React.ComponentType<{error: Error}>
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

export function lazyload<
    TModule extends Promise<unknown>,

    TComponent extends ComponentType<any>
>(
    importFunc: () => TModule, // function return value has type TModule
    selectorFunc?: (module: UnwrapPromise<TModule>) => TComponent, // function will return a component
    options: LazyLoadOptions = {}
): (props: React.ComponentProps<TComponent>) => JSX.Element {
    const lazyFactory = selectorFunc
        ? () => importFunc().then(module => ({default: selectorFunc(module as UnwrapPromise<TModule>)}))
        : importFunc as () => Promise<{default: TComponent}>;
    
    const LazyComponent = lazy(lazyFactory);
    const WrappedComponent = (
        props: React.ComponentProps<TComponent>
    ) : JSX.Element => {
        const content = (
            <Suspense fallback = {options.fallback ?? null}>
                <LazyComponent {...props}/>
            </Suspense>
        );
        if (options.errorBoundary) {
            const ErrorBoundary = options.errorBoundary;
            return (
                <ErrorBoundaryWrapper ErrorComponent={ErrorBoundary}>
                    {content}
                </ErrorBoundaryWrapper>
            )
        }
        return content
    }
    WrappedComponent.displayName = `LazyLoaded(${
        selectorFunc ? "SelectedComponent" : "ImportedComponent"
    })`;

    return WrappedComponent;
}


class ErrorBoundaryWrapper extends React.Component<{
  children: React.ReactNode;
  ErrorComponent: React.ComponentType<{ error: Error }>;
}> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <this.props.ErrorComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}