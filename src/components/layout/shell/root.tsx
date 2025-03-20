import {
  ActionIcon,
  AppShell,
  Avatar,
  Container,
  Flex,
  Image,
} from "@mantine/core";
import Logo from "../../../assets/imageClear.png";

export function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 80 }}>
      <AppShell.Header withBorder={false}>
        <Container size="480" h="100%">
          <Flex align="center" h="100%" justify="space-between">
            <Image w={100} h={35} src={Logo} alt="logo" />
            <ActionIcon size="lg">
              <Avatar size="md" variant="filled" color="primary" radius="md" />
            </ActionIcon>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container bg="white" size="480">
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
