import { Text, Accordion, Flex, Table, LoadingOverlay } from "@mantine/core";
import { PackageCheck, ReceiptIcon } from "lucide-react";

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

const products = [
  { name: "Carbon Water Bottle", quantity: 3 },
  { name: "Nitrogen Infused Face Mask", quantity: 2 },
  { name: "Yttrium LED Desk Lamp", quantity: 1 },
  { name: "Barium Home Cleaning Kit", quantity: 4 },
  { name: "Cerium Polishing Cloth", quantity: 5 },
];

const rows = products.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td ta="right">{element.quantity}</Table.Td>
  </Table.Tr>
));

function AccordionLabel({ label, description }: AccordionLabelProps) {
  return (
    <Flex gap={10} wrap="nowrap">
      <Flex align="center">
        <PackageCheck size={30} />
      </Flex>
      <div>
        <Text>{label}</Text>
        <Text lineClamp={1} size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Flex>
  );
}

export function PublishedRequests({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) {
  const items = data?.map((item: AccordionLabelProps, index: number) => (
    <Accordion.Item value={index.toString()} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Table withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Item</Table.Th>
              <Table.Th ta="right">Quantity</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      {
        data?.data?.length == 0 && (
          <Flex mt="xl" direction="column" align="center">
            <ReceiptIcon color="gray" size={55} />
            <Text mt="sm" ta="center" size="sm" c="dimmed">No requests found!</Text>
          </Flex>
        )
      }
      {data?.data?.length > 0 && (
        <Accordion chevronPosition="right" variant="separated">
          {items}
        </Accordion>
      )}
    </>
  );
}
