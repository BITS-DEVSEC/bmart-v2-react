import { Modal, Title, Table, Flex } from "@mantine/core";
import { CheckCircle2 } from "lucide-react";

export default function TransferStatus({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
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
      <Flex justify="center" align="center" direction="column">
        <CheckCircle2 color="green" size={80} />
        <Title mt="md" order={2}>2045.76 ETB</Title>
      </Flex>
      <Table mt="xs" >
        <Table.Tbody>
          <Table.Tr>
            <Table.Td fw={700}>From</Table.Td>
            <Table.Td align="right">BB 01-0002-23</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>To</Table.Td>
            <Table.Td align="right">BB 01-0001-23</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>Amount</Table.Td>
            <Table.Td align="right">200</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td fw={700}>Remark</Table.Td>
            <Table.Td align="right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </Modal>
  );
}
