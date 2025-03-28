import { Card, Flex, Group, ScrollArea, Text, Title } from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import CartCards from "../components/ui/cards/cartCards";
import CustomButton from "../components/ui/button";
import { Send, ShoppingBag } from "lucide-react";

export default function Cart() {
  return (
    <RootShell noFoot>
      <Card mb="sm" p="xs" withBorder>
        <Flex justify="space-between" align="center">
          <Title order={5}>Total Price</Title>
          <Text c="dimmed">123 ETB</Text>
        </Flex>
      </Card>
      <ScrollArea type="never" h={"calc(100vh - 282px)"}>
        <Flex direction="column" gap={20}>
          {[1, 2, 3, 4, 5, 6, 7].map((opt) => (
            <CartCards key={opt} />
          ))}
        </Flex>
      </ScrollArea>

      <Group
        gap={8}
        style={{ position: "absolute", bottom: 10, right: 15, left: 15 }}
      >
        <CustomButton icon={<ShoppingBag size={18} />} ltr label="ORDER" />
        <CustomButton
          icon={<Send size={18} />}
          ltr
          altColor
          label="PUBLISH REQUEST"
        />
      </Group>
    </RootShell>
  );
}
