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
  Menu,
  LoadingOverlay,
} from "@mantine/core";
import Logo from "../../../assets/imageClear.png";
import {
  HelpCircle,
  LucideLogOut,
  Package2Icon,
  PackageCheck,
  ShoppingBag,
  Truck,
  User2,
  WalletMinimal,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import { BackButtonHandler } from "../../actions/backButton";
import { usePullToRefresh } from "use-pull-to-refresh";

const MAXIMUM_PULL_LENGTH = 500;
const REFRESH_THRESHOLD = 280;

export function RootShell({
  children,
  noFoot,
}: {
  children: React.ReactNode;
  noFoot?: boolean;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = true;
  const [activePath, setActivePath] = useState("/");
  const [triggerRoute, setTriggerRoute] = useState("");

  const reload = () => {
    setTimeout(() => {
      console.log("hh");
    }, 120);
  };

  const { isRefreshing } = usePullToRefresh({
    onRefresh: reload,
    maximumPullLength: MAXIMUM_PULL_LENGTH,
    refreshThreshold: REFRESH_THRESHOLD,
  });

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <AppShell header={{ height: 80 }} footer={{ height: 90 }}>
      <BackButtonHandler />
      <AppShell.Header withBorder={false}>
        <Container size="480" h="100%">
          <Flex align="center" h="100%" justify="space-between">
            <Image style={{ cursor: "pointer" }} onClick={() => navigate("/")} w={100} h={35} src={Logo} alt="logo" />
            <Menu shadow="md" width={150}>
              <Menu.Target>
                <ActionIcon variant="transparent" size="lg">
                  <User2 />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  onClick={() => {
                    navigate("/auth");
                  }}
                  rightSection={<User2 size={16} />}
                >
                  Profile
                </Menu.Item>
                <Menu.Item onClick={() => navigate("/faq")} rightSection={<HelpCircle size={16} />}>
                  FAQ
                </Menu.Item>
                <Menu.Item
                  color="red"
                  rightSection={<LucideLogOut size={16} />}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <LoadingOverlay visible={isRefreshing} />
        <Container bg="white" size="480">
          {children}
        </Container>
      </AppShell.Main>

      {!noFoot && (
        <AppShell.Footer style={{ border: 0 }}>
          <Container mt="xs" size={480}>
            <Card p={7} py={7} radius="md" withBorder>
              <SimpleGrid spacing="xs" verticalSpacing="xs" cols={5}>
                {[
                  { title: "Market", icon: ShoppingBag, path: "/" },
                  { title: "Requests", icon: PackageCheck, path: "/requests" },
                  { title: "Orders", icon: Package2Icon, path: "/orders" },
                  { title: "Deliveries", icon: Truck, path: "/deliveries" },
                  { title: "Bank", icon: WalletMinimal, path: "/bank" },
                ].map((opt) => {
                  const isActive = activePath === opt.path;
                  return (
                    <Center key={opt.title}>
                      <Box
                        onClick={() => {
                          if (
                            [
                              "/deliveries",
                              "/requests",
                              "/bank",
                              "/orders",
                              "/wholesalers",
                            ].includes(opt.path) &&
                            !isAuthenticated
                          ) {
                            setTriggerRoute(opt.path);
                            return;
                          }
                          navigate(opt.path);
                          console.log(triggerRoute);
                        }}
                        style={{
                          height: 50,
                          width: 56,
                          borderRadius: 5,
                          backgroundColor: isActive
                            ? "var(--mantine-color-primary-9)"
                            : "#FFFFFF",
                        }}
                      >
                        <Flex direction="column">
                          <Center h={38}>
                            <opt.icon
                              color={isActive ? "white" : "black"}
                              size={20}
                            />
                          </Center>
                          <Text
                            ta="center"
                            c={isActive ? "white" : "black"}
                            style={{ fontSize: 10 }}
                            mt={-6}
                          >
                            {opt.title}
                          </Text>
                        </Flex>
                      </Box>
                    </Center>
                  );
                })}
              </SimpleGrid>
            </Card>
          </Container>
        </AppShell.Footer>
      )}
    </AppShell>
  );
}
