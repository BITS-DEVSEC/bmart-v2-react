import {
    Text,
    Accordion,
    Flex,
    Table,
    Title,
    Divider,
  } from "@mantine/core";
  import { PackageCheck } from "lucide-react";
  
  const charactersList = [
    {
      id: "bender",
      image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
      label: "Bender Bending Rodríguez",
      description: "Fascinated with cooking, though has no sense of taste",
      content:
        "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
    },
  
    {
      id: "carol",
      image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
      label: "Carol Miller",
      description: "One of the richest people on Earth",
      content:
        "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
    },
  
    {
      id: "homer",
      image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
      label: "Homer Simpson",
      description: "Overweight, lazy, and often ignorant",
      content:
        "Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.",
    },
  ];
  
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
  
  export function DRequests() {
    const items = charactersList.map((item) => (
      <Accordion.Item value={item.id} key={item.label}>
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
          <Divider my="xs" />
          <Flex px="xs" style={{ width: "100%" }} justify="space-between">
            <Title order={5}>Total</Title>
            <Text>
              {products.reduce((total, product) => total + product.quantity, 0)}{" "}
            </Text>
          </Flex>
          <Divider my="xs" />
        </Accordion.Panel>
      </Accordion.Item>
    ));
  
    return (
      <Accordion chevronPosition="right" variant="separated">
        {items}
      </Accordion>
    );
  }
  