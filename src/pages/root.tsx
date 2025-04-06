import {
  ActionIcon,
  Button,
  Flex,
  Indicator,
  LoadingOverlay,
  ScrollArea,
  SegmentedControl,
  Text,
  TextInput,
} from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import ProductCards from "../components/ui/cards/productCards";
import { BoxIcon, InfoIcon, Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import QRScanner from "../components/actions/qrScanner";
import { Capacitor } from "@capacitor/core";
import { useEffect, useState } from "react";
import { useLazyGetProductsQuery } from "../store/api/products";

export default function Root() {
  const navigate = useNavigate();
  const platform = Capacitor.getPlatform();
  const [pageState, setPageState] = useState<string>("BUY");
  const [ getProducts, {isLoading, error, data: products} ] = useLazyGetProductsQuery();

  useEffect(() => {
    getProducts();
  }, [pageState]);

  return (
    <RootShell refresh={getProducts}>
      <LoadingOverlay visible={isLoading} />
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
              variant="default"
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
        value={pageState}
        onChange={(value: string) => setPageState(value)}
        data={["BUY", "SELL"]}
      />
      <ScrollArea type="never" h="calc(100vh - 272px)">
        {error && (
          <Flex mt="xl" direction="column" align="center">
            <InfoIcon color="red" size={55} />
            <Text mt="sm" ta="center" size="sm" c="red">
              Failed to fetch products!
            </Text>
            <Button loading={isLoading} onClick={() => getProducts()} size="xs" mt="sm">Try Again</Button>
          </Flex>
        )}
        {products?.data?.length == 0 && (
          <Flex mt="xl" direction="column" align="center">
            <BoxIcon color="gray" size={55} />
            <Text mt="sm" ta="center" size="sm" c="dimmed">
              No products found!
            </Text>
          </Flex>
        )}
        {products?.data?.map((product: { id: number }) => (
          <ProductCards alt={pageState == "SELL"} key={product.id} />
        ))}
      </ScrollArea>
    </RootShell>
  );
}
