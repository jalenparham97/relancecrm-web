import { Box, Text } from '@mantine/core';
import Link from './Link';

interface Props {
  text: string;
  icon?: React.ReactNode;
  href: string;
  [x: string]: any;
}

export default function NavListItem({ text, icon, href, ...otherProps }: Props) {
  return (
    <Link to={href}>
      <Box
        className="w-full px-3 py-2 text-left transition-colors flex items-center rounded-[5px] hover:bg-gray-600 hover:bg-opacity-20"
        component="button"
        {...otherProps}
      >
        <Text>{icon}</Text>
        <Box className="ml-5 leading-none">
          <Text>{text}</Text>
        </Box>
      </Box>
    </Link>
  );
}
