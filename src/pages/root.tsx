import {
  ActionIcon,
  Chip,
  Divider,
  Flex,
  Indicator,
  ScrollArea,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import ProductCards from "../components/ui/cards/productCards";
import { FilterIcon, Search, ShoppingBasket } from "lucide-react";

export default function Root() {
  return (
    <RootShell>
      <Flex mb="xs" align="center" gap="sm">
        <TextInput
          rightSection={<Search size={18} />}
          size="md"
          radius="md"
          w={"100%"}
          placeholder="Search products..."
        />
        <ActionIcon size="input-md" variant="light">
          <FilterIcon size={20} />
        </ActionIcon>
        <Indicator color="red" offset={0}>
          <ActionIcon size="input-md" variant="light">
            <ShoppingBasket size={25} />
          </ActionIcon>
        </Indicator>
      </Flex>
      <Flex style={{ width: "100%" }} mb="xs" align="center">
        <ScrollArea style={{ width: "68.5%" }} type="never">
          <Flex gap="sm">
            <Chip.Group>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((chip) => (
                <Chip value={chip?.toString()} radius="sm" key={chip}>
                  Category{chip}
                </Chip>
              ))}
            </Chip.Group>
          </Flex>
        </ScrollArea>
        <Divider mx="xs" orientation="vertical" />
        <SegmentedControl color="primary" size="xs" data={["BUY", "SELL"]} />
      </Flex>
      <ScrollArea type="never" h="calc(100vh - 270px)">
        {[1, 2, 3, 4].map(() => (
          <ProductCards />
        ))}
      </ScrollArea>
    </RootShell>
  );
}
