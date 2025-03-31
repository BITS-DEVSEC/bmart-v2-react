import { Modal, Title, Table, Flex, Card } from "@mantine/core";
import { CheckCircle2, XCircle } from "lucide-react";

export default function TransferStatus({
  opened,
  toggle,
  status,
}: {
  opened: boolean;
  toggle: () => void;
  status?: boolean;
}) {
  return (
    <Modal
      style={{ position: "absolute", bottom: 0, zIndex: 1000 }}
      transitionProps={{
        transition: "slide-up",
        duration: 350,
        timingFunction: "linear",
      }}
      title={<Title order={5}>Payment Status</Title>}
      opened={opened}
      onClose={toggle}
    >
      <Card withBorder p="xl">
        <Flex justify="center" align="center" direction="column">
          {status ? (
            <CheckCircle2 color="green" size={80} />
          ) : (
            <XCircle color="red" size={80} />
          )}
          <Title mt="md" order={2}>
            2045.76 ETB
          </Title>
        </Flex>
      </Card>
      <Table mt="xs" withTableBorder>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td fw={700}>From</Table.Td>
            <Table.Td align="right">
              <span style={{ color: "orange" }}>BB 01-0002-23</span>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>To</Table.Td>
            <Table.Td align="right">
              <span style={{ color: "green" }}>BB 01-0001-23</span>
            </Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>Amount</Table.Td>
            <Table.Td align="right">2045.76 ETB</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>Remark</Table.Td>
            <Table.Td align="right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Modal>
  );
}
