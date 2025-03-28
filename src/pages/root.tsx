import {
  ActionIcon,
  Flex,
  Indicator,
  ScrollArea,
  SegmentedControl,
  TextInput,
} from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import ProductCards from "../components/ui/cards/productCards";
import { Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import QRScanner from "../components/actions/qrScanner";
import { Capacitor } from "@capacitor/core";

export default function Root() {
  const navigate = useNavigate();
  const platform = Capacitor.getPlatform();

  return (
    <RootShell>
      <Flex mb="xs" align="center" gap="sm">
        <TextInput
          onFocus={() => {
            navigate("/search");
          }}
          rightSection={<Search size={18} />}
          size="md"
          radius="md"
          w={"100%"}
          placeholder="Search products..."
        />
        <Flex gap={platform === "web" ? 0 : 10}>
          <Indicator color="red" offset={0}>
            <ActionIcon
              onClick={() => navigate("/cart")}
              size="input-md"
              variant="light"
            >
              <ShoppingCart size={25} />
            </ActionIcon>
          </Indicator>
          <QRScanner size="input-md" />
        </Flex>
      </Flex>

      <SegmentedControl
        mb="xs"
        fullWidth
        color="primary"
        size="sm"
        radius="md"
        data={["BUY", "SELL"]}
      />
      <ScrollArea type="never" h="calc(100vh - 272px)">
        {[1, 2, 3, 4].map(() => (
          <ProductCards />
        ))}
      </ScrollArea>
    </RootShell>
  );
}
