import {
  ActionIcon,
  AppShell,
  Container,
  Flex,
  Image,
  Card,
  Center,
  SimpleGrid,
  Text,
  Box,
} from "@mantine/core";
import Logo from "../../../assets/imageClear.png";
import {
  Bell,
  ListTodo,
  ReceiptIcon,
  Store,
  User2,
  WalletMinimal,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function RootShell({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const isAuthenticated = false;
  const activePath = window.location.pathname;
  const [triggerRoute, setTriggerRoute] = useState("");
  return (
    <AppShell header={{ height: 80 }} footer={{ height: 90 }}>
      <AppShell.Header withBorder={false}>
        <Container size="480" h="100%">
          <Flex align="center" h="100%" justify="space-between">
            <Image w={100} h={35} src={Logo} alt="logo" />
            <Flex gap="md">
              <ActionIcon variant="transparent" size="lg">
                <User2 />
              </ActionIcon>
              <ActionIcon variant="transparent" size="lg">
                <Bell />
              </ActionIcon>
            </Flex>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container bg="white" size="480">
          {children}
        </Container>
      </AppShell.Main>

      <AppShell.Footer style={{ border: 0 }}>
        <Container mt="xs" size={480}>
          <Card p={7} py={7} radius="md" withBorder>
            <SimpleGrid spacing="xs" verticalSpacing="xs" cols={5}>
              {[
                {
                  title: "Market",
                  icon: (
                    <Store
                      color={activePath == "/" ? "white" : "black"}
                      size={25}
                    />
                  ),
                  path: "/",
                },
                {
                  title: "Requests",
                  icon: (
                    <ListTodo
                      color={activePath == "/request" ? "white" : "black"}
                      size={25}
                    />
                  ),
                  path: "/request",
                },
                {
                  title: "Orders",
                  icon: (
                    <ReceiptIcon
                      color={activePath == "/orders" ? "white" : "black"}
                      size={25}
                    />
                  ),
                  path: "/orders",
                },
                {
                  title: "Services",
                  icon: (
                    <ReceiptIcon
                      color={activePath == "/services" ? "white" : "black"}
                      size={25}
                    />
                  ),
                  path: "/services",
                },
                {
                  title: "Bank",
                  icon: (
                    <WalletMinimal
                      color={activePath == "/bank" ? "white" : "black"}
                      size={25}
                    />
                  ),
                  path: "/bank",
                },
              ].map((opt) => (
                <Center key={opt.title}>
                  <Box
                    variant="subtle"
                    onClick={() => {
                      const paths = ["/store", "/request", "/bank", "/orders"];
                      if (paths.includes(opt.path) && !isAuthenticated) {
                        setTriggerRoute(opt.path);
                        console.log(triggerRoute);

                        return;
                      }
                      navigate(opt.path);
                    }}
                    bg={activePath == opt.path ? "primary" : "dark-1"}
                    style={{ height: 50, width: 56, borderRadius: 5 }}
                  >
                    <Flex direction="column">
                      <Center h={38}>{opt.icon}</Center>
                      <Text
                        ta="center"
                        c={activePath == opt.path ? "white" : "black"}
                        style={{ fontSize: 10 }}
                        mt={-6}
                      >
                        {opt.title}
                      </Text>
                    </Flex>
                  </Box>
                </Center>
              ))}
            </SimpleGrid>
          </Card>
        </Container>
      </AppShell.Footer>
    </AppShell>
  );
}
