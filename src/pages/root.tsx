import { ActionIcon, Flex, ScrollArea, TextInput } from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import ProductCards from "../components/ui/cards/productCards";
import { Filter, Search } from "lucide-react";

export default function Root() {
  return (
    <RootShell>
      <Flex mb="md" gap="sm" align="center">
        <TextInput
          leftSection={<Search size={18} />}
          rightSection={
            <Flex gap="sm">
              <ActionIcon variant="transparent">
                <Filter size={18} />
              </ActionIcon>
            </Flex>
          }
          size="md"
          radius="md"
          w={"100%"}
          placeholder="Search..."
        />
      </Flex>
      <ScrollArea type="never" h="calc(100vh - 228px)">
        {[1, 2, 3, 4].map(() => (
          <ProductCards />
        ))}
      </ScrollArea>
    </RootShell>
  );
}
