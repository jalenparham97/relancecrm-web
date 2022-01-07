import { AppShell } from '@mantine/core';
import Footer from '../shared/Footer';
import NavbarHeader from '../shared/NavbarHeader';

interface Props {
  children: React.ReactNode;
  header?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export default function PageLayout({ children, ...otherProps }: Props) {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      header={<NavbarHeader />}
      styles={(theme) => ({
        main: {
          paddingTop: '70px',
          paddingLeft: '0px !important',
          paddingRight: '0px !important',
          overflowX: 'hidden',
          width: '100vw',
        },
      })}
    >
      {children}
      <Footer />
    </AppShell>
  );
}
