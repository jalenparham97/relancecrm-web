import { useState } from 'react';
import {
  Header,
  MediaQuery,
  Burger,
  Title,
  Group,
  Box,
  Drawer,
  useMantineColorScheme,
  ActionIcon,
} from '@mantine/core';
import { FiHome, FiLogIn, FiPlus, FiUser, FiMoon, FiSun } from 'react-icons/fi';
import { FaSignature } from 'react-icons/fa';
import Link from './Link';
import Button from './Button';
import NavListItem from './NavListItem';
import { config } from '@/config';

interface Props {
  homePage?: string;
}

export default function NavbarHeader({ homePage = '/' }: Props) {
  const [opened, setOpened] = useState(false);

  return (
    <Header height={70} padding="md" fixed>
      <Box className="container m-auto flex justify-between items-center h-full">
        <Group spacing="xs">
          <Link to={homePage} className="no-underline">
            <Group>
              <Title order={2} className="text-indigo-600">
                Relance CRM
              </Title>
            </Group>
          </Link>
        </Group>
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <Group>
            <Group className="mr-10 space-x-6">
              <Button
                to="#features"
                className="bg-transparent text-blueGray-500 text-base font-medium p-0 hover:bg-transparent hover:text-blueGray-600"
              >
                Features
              </Button>
              <Button
                to="#pricing"
                className="bg-transparent text-blueGray-500 text-base font-medium p-0 hover:bg-transparent hover:text-blueGray-600"
              >
                Pricing
              </Button>
            </Group>
            <Group spacing="xs">
              <Link href={`${config.appUrl}/auth/login`} notExternal>
                <Button variant="default">Login</Button>
              </Link>
              <Link href={`${config.appUrl}/auth/signup`} notExternal>
                <Button>Signup</Button>
              </Link>
            </Group>
          </Group>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger opened={opened} onClick={() => setOpened((o: boolean) => !o)} />
        </MediaQuery>
      </Box>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Relance CRM"
        padding="xl"
        size="xl"
      >
        <Box className="w-full grid gap-1">
          <NavListItem
            href="/retro/create"
            icon={<FiPlus />}
            text="Create retro"
            onClick={() => setOpened(false)}
          />
        </Box>
      </Drawer>
    </Header>
  );
}
