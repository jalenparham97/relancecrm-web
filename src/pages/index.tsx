import {
  Box,
  Card,
  Center,
  List,
  SimpleGrid,
  Text,
  Group,
  Title,
  ThemeIcon,
  Container,
  Divider,
} from '@mantine/core';
import { FiCheckCircle, FiCreditCard, FiMonitor, FiZap } from 'react-icons/fi';
import Button from '@/components/shared/Button';
import Link from '@/components/shared/Link';
import { config } from '@/config';

const IndexPage = () => (
  <Box>
    <Box
      className="xl:bg-contain bg-top bg-no-repeat"
      style={{ backgroundImage: "url('img/backgrounds/intersect.svg')" }}
    >
      <Container className="mx-auto">
        <Box className="pt-12 text-center">
          <Box className="max-w-xl mx-auto mb-8">
            <Text className="text-3xl md:text-5xl mb-4 font-bold font-heading">
              <span>All in one</span> <span>business tool for</span>{' '}
              <span className="text-indigo-600">Freelancers</span>
            </Text>
            <Text className="text-blueGray-500 font-medium text-lg leading-relaxed">
              Get your business organized so you can spend less time managing and more time earning.
            </Text>
          </Box>
          <Box className="space-x-3">
            <Link href={`${config.appUrl}/auth/signup`} notExternal>
              <Button size="lg">Get started now</Button>
            </Link>
            <Button to="#features" size="lg" color="dark">
              Learn more
            </Button>
          </Box>
        </Box>
      </Container>
      <Box className="relative max-w-6xl mx-auto mt-8">
        <img className="w-full" src="img/elements/pattern.png" alt="" />
        <Box
          className="absolute"
          style={{ top: '10%', left: '16%', width: '67.8%', height: '76.7%' }}
        >
          <img
            className="rounded w-full shadow-lg"
            src="img/placeholders/relance-dashboard.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>

    <Container id="features" className="mx-auto pt-32 pb-20 lg:pb-12" size="xl">
      <Box className="md:flex items-center justify-between">
        <Box className="w-full md:w-1/2">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src="img/placeholders/client.png"
            alt=""
          />
        </Box>
        <Box className="w-full md:w-1/3">
          <Box className="my-auto mx-auto pt-8 lg:pt-0">
            <Text className="text-3xl md:text-4xl mb-4 font-bold font-heading m-0">
              <span>Manage your</span> <span className="text-indigo-600">clients</span>
              <span> effortlessly</span>
            </Text>
            <Text className="text-blueGray-500 leading-loose mb-6 font-medium text-lg">
              Keep your clients all together with lightweight CRM capabilities. Each client's
              profile page automatically organizes all the invoices, projects, and other documents
              you’ve shared with them.
            </Text>
            <Link href={`${config.appUrl}/auth/signup`} notExternal>
              <Button size="lg" className="w-full md:w-auto">
                Get started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>

    <Container className="mx-auto py-20" size="xl">
      <Box className="md:flex md:flex-row-reverse items-center justify-between">
        <Box className="w-full md:w-1/2">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src="img/placeholders/project.png"
            alt=""
          />
        </Box>
        <Box className="w-full md:w-1/3">
          <Box className="my-auto mx-auto pt-8 lg:pt-0">
            <Text className="text-3xl md:text-4xl mb-4 font-bold font-heading m-0">
              <span>Organize client work and tasks into</span>{' '}
              <span className="text-indigo-600">Projects</span>
            </Text>
            <Text className="text-blueGray-500 leading-loose mb-6 font-medium text-lg">
              Manage each project’s status, tasks, invoices, and much more. All you need to do is
              select which project an artifact belongs to and the system brings it all together
              seamlessly.
            </Text>
            <Link href={`${config.appUrl}/auth/signup`} notExternal>
              <Button size="lg" className="w-full md:w-auto">
                Get started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>

    <Container className="mx-auto py-20" size="xl">
      <Box className="md:flex items-center justify-between">
        <Box className="w-full md:w-1/2">
          <img
            className="object-cover w-full h-full rounded shadow-lg"
            src="img/placeholders/invoice.png"
            alt=""
          />
        </Box>
        <Box className="w-full md:w-1/3">
          <Box className="my-auto mx-auto pt-8 lg:pt-0">
            <Text className="text-3xl md:text-4xl mb-4 font-bold font-heading m-0">
              <span className="text-indigo-600">Get paid quickly</span>{' '}
              <span>with our invoice software</span>
            </Text>
            <Text className="text-blueGray-500 leading-loose mb-6 font-medium text-lg">
              You work hard for your money. Get it faster with simple invoices that look great and
              are easy to send and pay.
            </Text>
            <Link href={`${config.appUrl}/auth/signup`} notExternal>
              <Button size="lg" className="w-full md:w-auto">
                Get started
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>

    <section className="py-20 bg-blueGray-50">
      <Container size="lg" className="mx-auto">
        <Box className="md:flex items-center mb-16">
          <Box className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Text className="text-4xl font-bold font-heading">
              <span>Get paid on time with smart,</span>{' '}
              <span className="text-blue-600">flexible invoicing.</span>
            </Text>
          </Box>
          <Box className="w-full lg:w-1/2">
            <Text className="lg:pl-16 text-blueGray-500 font-medium text-lg leading-loose">
              Customize and automate invoices and accept payments quickly and securely, via bank
              transfer, credit card, or Apple Pay.
            </Text>
          </Box>
        </Box>

        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          <Card shadow="sm" padding="xl" className="bg-white">
            <Group direction="column" spacing="xs" grow>
              <Center>
                <ThemeIcon size="xl">
                  <FiZap size="25px" />
                </ThemeIcon>
              </Center>
              <Title className="text-center mt-2 text-body" order={3}>
                Get paid fast
              </Title>
              <Text className="text-blueGray-600 text-center">
                Build your invoice in minutes and send it in just a few clicks. Your recipients can
                pay from their desktop, mobile, or tablet.
              </Text>
            </Group>
          </Card>
          <Card shadow="sm" padding="xl" className="bg-white">
            <Group direction="column" spacing="xs" grow>
              <Center>
                <ThemeIcon size="xl">
                  <FiCreditCard size="25px" />
                </ThemeIcon>
              </Center>
              <Title className="text-center mt-2 text-body" order={3}>
                Popular payment options
              </Title>
              <Text className="text-blueGray-600 text-center">
                Give your invoice recipients options when they pay. Accept top credit and debit
                cards, direct deposit, and more.
              </Text>
            </Group>
          </Card>
          <Card shadow="sm" padding="xl" className="bg-white">
            <Group direction="column" spacing="xs" grow>
              <Center>
                <ThemeIcon size="xl">
                  <FiMonitor size="25px" />
                </ThemeIcon>
              </Center>
              <Title className="text-center mt-2 text-body" order={3}>
                Monitor your invoices
              </Title>
              <Text className="text-blueGray-600 text-center">
                Keep track of each invoice’s status. You’ll know who you need to remind, and
                resending is simple.
              </Text>
            </Group>
          </Card>
        </SimpleGrid>
      </Container>
    </section>

    <section
      id="pricing"
      className="py-20 xl:bg-contain bg-top bg-no-repeat w-full"
      style={{ backgroundImage: "url('img/backgrounds/intersect.svg')" }}
    >
      <Container className="mx-auto">
        <Box className="text-center mb-16">
          <Text className="max-w-lg mx-auto text-4xl font-bold font-heading">
            Save time and earn more for your <span className="text-indigo-600">freelance</span>{' '}
            business
          </Text>
          <Text className="mt-4 text-blueGray-500 font-medium text-lg leading-loose">
            Simple and easy pricing to help your business grow.
          </Text>
          <Text className="text-blueGray-500 font-medium text-lg leading-loose">
            Start your 30 day free trial now.
          </Text>
        </Box>
        <Center>
          <Box className="w-full md:w-1/2 lg:w-1/3 px-3">
            <Box className="pt-8 pb-8 px-4 bg-white rounded shadow-md">
              <Box className="text-center">
                <Text className="text-4xl font-bold font-heading">Pro</Text>
                <Text className="text-4xl text-indigo-600 font-bold font-heading">$12</Text>
                <Text className="mb-8 text-blueGray-500 font-medium">per month</Text>
              </Box>
              <Divider className="" />
              <List
                className="mb-8 mt-8 text-blueGray-600 text-base text-center"
                spacing="xs"
                size="sm"
                center
                icon={<FiCheckCircle size="20px" className="text-green-600" />}
              >
                <List.Item>Unlimited clients</List.Item>
                <List.Item>Unlimited invoices</List.Item>
                <List.Item>Task management</List.Item>
              </List>
              <Box className="text-center">
                <Link href={`${config.appUrl}/auth/signup`} notExternal>
                  <Button fullWidth size="lg">
                    Start free trial
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Center>
      </Container>
    </section>

    <section className="pt-20 pb-24 bg-indigo-600">
      <Box className="max-w-xl px-2 mx-auto text-center">
        <Text className="mt-3 text-3xl md:text-4xl text-white font-bold font-heading">
          Let us help you manage your business so you can earn more
        </Text>
        <Box className="mt-6">
          <Link href={`${config.appUrl}/auth/signup`} notExternal>
            <Button color="dark" size="lg">
              Get started
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  </Box>
);

export default IndexPage;
