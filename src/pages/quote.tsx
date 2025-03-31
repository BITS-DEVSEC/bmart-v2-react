import {
  Card,
  Flex,
  ScrollArea,
  Text,
  Image,
  Title,
  Group,
  ActionIcon,
  TextInput,
  SimpleGrid,
} from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import { BoxIcon, PlusIcon } from "lucide-react";
import CustomButton from "../components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export default function PlaceQoute() {
  return (
    <RootShell noFoot>
      <ScrollArea h="calc(100vh - 170px)" type="never">
        <Flex gap="xs" direction="column">
          {[1, 2, 3, 4, 5].map((item) => (
            <>
              <Card key={item} radius="md" withBorder>
                <Card.Section withBorder inheritPadding>
                  <Flex my="xs" align="center" justify="space-between">
                    <Title order={5}>Product Request</Title>
                    <BoxIcon size={20} />
                  </Flex>
                </Card.Section>
                <Card.Section>
                  <SimpleGrid p="xs" cols={images.length}>
                    {images.map((image) => (
                      <Image
                        radius="md"
                        key={image}
                        src={image}
                        height={60}
                        width={60}
                      />
                    ))}
                  </SimpleGrid>
                </Card.Section>
                <Card.Section withBorder inheritPadding>
                  <Text size="xs" my="xs" lineClamp={2} c="dimmed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam veniam facere commodi minima impedit cupiditate!
                    Aliquam ipsum officia cupiditate, ad enim amet iure corporis
                    eveniet magnam, deserunt minima suscipit est.
                  </Text>
                </Card.Section>
                <Card.Section withBorder inheritPadding mt="xs">
                  <Flex gap={15} wrap="nowrap">
                    <Group grow>
                      <TextInput
                        size="xs"
                        mb="xs"
                        placeholder="Per UnitPrice"
                      />
                      <TextInput size="xs" mb="xs" placeholder="Quantity" />
                    </Group>
                    <ActionIcon variant="default" size="input-xs">
                      <PlusIcon size={18} />
                    </ActionIcon>
                  </Flex>
                </Card.Section>
              </Card>
            </>
          ))}
        </Flex>
      </ScrollArea>
      <Group
        gap={8}
        style={{ position: "absolute", bottom: 10, right: 15, left: 15 }}
      >
        <CustomButton label="Submit" ltr altSize />
      </Group>
    </RootShell>
  );
}
