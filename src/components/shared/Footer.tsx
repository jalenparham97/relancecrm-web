import { Box, Text, Title, Container } from '@mantine/core';
import Link from './Link';

export default function Footer() {
  return (
    <section className="py-16 w-full">
      <Container size="lg" className="mx-auto">
        <Box className="flex flex-col lg:flex-row mb-10">
          <Link
            className="inline-block mx-auto mb-10 lg:mb-0 lg:ml-0 lg:mr-auto no-underline"
            to="/"
          >
            <Title order={2} className="text-indigo-600">
              Relance CRM
            </Title>
          </Link>
          <Box className="flex lg:flex-row items-center justify-center space-x-12">
            <Link
              to="#features"
              className="text-lg font-bold font-heading no-underline text-blueGray-900 hover:text-blueGray-600"
            >
              Features
            </Link>

            <Link
              to="#pricing"
              className="text-lg font-bold font-heading no-underline text-blueGray-900 hover:text-blueGray-600"
            >
              Pricing
            </Link>
          </Box>
        </Box>
        <Box className="flex flex-col lg:flex-row items-center lg:justify-between">
          <Text className="text-xs text-blueGray-600 font-medium">
            © {new Date().getFullYear()}. All rights reserved.
          </Text>
          <Box className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            <a className="inline-block px-2" href="#">
              <img src="metis-assets/icons/facebook-blue.svg" alt="" />
            </a>
            <a className="inline-block px-2" href="#">
              <img src="metis-assets/icons/twitter-blue.svg" alt="" />
            </a>
            <a className="inline-block px-2" href="#">
              <img src="metis-assets/icons/instagram-blue.svg" alt="" />
            </a>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
