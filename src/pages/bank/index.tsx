import {
  ActionIcon,
  Box,
  Card,
  Flex,
  Image,
  Overlay,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import BankLogo from "../../assets/imageClear.png";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  ChartArea,
  Ghost,
} from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import CustomButton from "../../components/ui/button";
import DirectTransfer from "./directTransfers";
import TransferStatus from "./transferStatus";
import { useEffect } from "react";

export default function BankPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drOpen, { toggle: toggleDr }] = useDisclosure(false);
  const [statusOpened, { toggle: toggleStatus }] = useDisclosure();

  useEffect(() => {
    if(drOpen){
      toggleDr()
    }
  }, [statusOpened])
  return (
    <RootShell>
      <TransferStatus opened={statusOpened} toggle={toggleStatus} />
      <DirectTransfer opened={drOpen} toggle={toggleDr} toggleStatus={toggleStatus} />
      <Card radius="md" withBorder h={200} shadow="sm">
        <Overlay
          blur={10}
          display={!opened ? "block" : "none"}
          style={{ zIndex: 99 }}
        />
        <Flex direction="column" justify="space-between" h={200}>
          <Flex align="center" justify="space-between">
            <Image src={BankLogo} w={120} h={35} />
            <Title order={5}>Virtual Acc.</Title>
          </Flex>
          <Flex direction="column">
            <Title
              style={{ maxWidth: "70%" }}
              c={opened ? "black" : "dark"}
              bg={opened ? "white" : "dark"}
              order={3}
            >
              Nigus Solomon
            </Title>
            <Text
              style={{ maxWidth: "70%" }}
              bg={opened ? "white" : "dark"}
              c={opened ? "dimmed" : "dark"}
            >
              BB 00-01000-12
            </Text>

            <Title
              style={{ maxWidth: "70%" }}
              c={opened ? "black" : "dark"}
              bg={opened ? "white" : "dark"}
              mt="md"
              order={3}
            >
              2,0045.43 ETB
            </Title>
          </Flex>
        </Flex>
        <Box style={{ position: "absolute", right: 10, top: "40%" }}>
          <Banknote size={50} />
        </Box>
        <ActionIcon
          variant={opened ? "light" : "default"}
          onClick={toggle}
          size="lg"
          style={{ position: "absolute", bottom: 0, right: 0, zIndex: 100 }}
        >
          {opened ? <Ghost size={18} /> : <Banknote size={18} />}
        </ActionIcon>
      </Card>
      <CustomButton
        action={toggleDr}
        props={{ mt: "sm" }}
        label="DIRECT TRANSFER"
        ltr
        icon={<Banknote size={20} />}
      />
      <Flex align="center" justify="space-between" my="sm">
        <Title order={5}>Transactions</Title>
        <ChartArea size={20} />
      </Flex>
      <ScrollArea style={{ borderRadius: 5 }} mt="sm" h="calc(100vh - 480px)">
        <Flex direction="column" gap={5}>
          {[1, 2, 3, 4, 5, 6, 7].map(() => (
            <Card withBorder>
              <Flex align="center" justify="space-between">
                <Flex direction="column">
                  <Flex gap={2} align="center">
                    <ArrowLeft color="red" size={15} />
                    <Text c="orange" size="xs">
                      BB 01-2312-09
                    </Text>
                  </Flex>
                  <Flex gap={2} align="center">
                    <ArrowRight color="green" size={15} />
                    <Text c="green" size="xs">
                      BB 02-00876-09
                    </Text>
                  </Flex>
                </Flex>
                <Title order={5}>200 ETB</Title>
              </Flex>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </RootShell>
  );
}
