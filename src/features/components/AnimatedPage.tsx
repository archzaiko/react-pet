import { PropsWithChildren, ReactElement } from 'react';

export const AnimatedPage = ({ children }: PropsWithChildren): ReactElement => {
  return <div className="h-full animate-mountpage">{children}</div>;
};
