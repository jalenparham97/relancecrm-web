import { MantineProvider } from '@mantine/core';

export function ThemeProvider({ children }) {
  return (
    <MantineProvider
      withNormalizeCSS
      theme={{ primaryColor: 'indigo' }}
      styles={{
        Button: (theme) => ({
          root: { ':disabled': { pointerEvents: 'none' } },
        }),
        Tabs: (theme) => ({
          tabLabel: { fontWeight: 'bold' },
          tabControl: { height: '50px' },
        }),
        Checkbox: (theme) => ({
          input: { cursor: 'pointer' },
          label: { cursor: 'pointer' },
        }),
        Modal: (theme) => ({
          title: { fontSize: '25px', fontWeight: 'bold' },
        }),
        Text: (theme) => ({
          dimmed: { color: theme.colorScheme === 'light' ? '' : '' },
        }),
      }}
    >
      {children}
    </MantineProvider>
  );
}
