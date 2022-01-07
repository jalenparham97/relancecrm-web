import NextLink from 'next/link';
import { Anchor } from '@mantine/core';

interface Props {
  to?: string;
  href?: string;
  notExternal?: boolean;
  children?: React.ReactNode;
  className?: string;
  sx?: any;
  [x: string]: any;
}

export default function Link({
  to,
  href,
  notExternal = false,
  children,
  className,
  sx,
  ...otherProps
}: Props) {
  if (to) {
    return (
      <Anchor component={NextLink} href={to} {...otherProps}>
        <a className={`${className}`}>{children}</a>
      </Anchor>
    );
  }

  if (notExternal) {
    return (
      <Anchor href={href} sx={sx} {...otherProps}>
        {children}
      </Anchor>
    );
  }

  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" sx={sx} {...otherProps}>
      {children}
    </Anchor>
  );
}
