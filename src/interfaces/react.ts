import React, { ReactElement as _ReactElement } from 'react';

export type Children = React.ReactNode;
export type ReactElement = _ReactElement;
export type PropsWithChildren<P> = P & { children?: Children };
export type FC<P = unknown> = (props: P) => ReactElement | null;
export type FCC<P = unknown> = FC<PropsWithChildren<P>>;
