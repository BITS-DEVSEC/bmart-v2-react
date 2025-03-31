import {
  ActionIcon,
  Avatar,
  Card,
  Flex,
  Group,
  Modal,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import { RootShell } from "../components/layout/shell/root";
import CartCards from "../components/ui/cards/cartCards";
import CustomButton from "../components/ui/button";
import { Globe2, PhoneCallIcon, Send, ShoppingBag } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { ContainedSelect } from "../components/ui/inputs/select";
import { CheckboxCard } from "../components/ui/inputs/checkbox";

export default function Cart() {
  const [opened, { toggle }] = useDisclosure(false);
  const [submissionState, setSubmissionState] = useState<"Order" | "Request">(
    "Order"
  );
  const [wholesaler, setWholesaler] = useState<string | null>(null);
  return (
    <RootShell noFoot>
      <Modal
        title={<Title order={5}>Publish {submissionState}</Title>}
        opened={opened}
        onClose={toggle}
      >
        {submissionState === "Order" && (
          <>
            <ContainedSelect
              search
              label="Search Wholesalers"
              placeholder="Search Wholesalers"
              setValue={setWholesaler}
              value={wholesaler || ""}
              data={["Nigus Solomon"]}
            />
            {wholesaler && (
              <Card mt="xs" withBorder>
                <Flex justify="space-between" align="center">
                  <Flex gap={10}>
                    <Avatar radius="md" size={50} name="Nigus Solomon" />
                    <Flex direction="column">
                      <Title order={5}>Nigus Solomon</Title>
                      <Text size="sm" c="dimmed">
                        +251978616116
                      </Text>
                    </Flex>
                  </Flex>
                  <ActionIcon variant="light" radius="xl" size={"xl"}>
                    <PhoneCallIcon size={20} />
                  </ActionIcon>
                </Flex>
              </Card>
            )}
            <CustomButton
              props={{ mt: "xs" }}
              action={toggle}
              icon={<Send size={18} />}
              ltr
              label="Publish"
            />
          </>
        )}

        {submissionState == "Request" && <Flex gap="xs" direction="column">{[1, 2, 3].map(() => <CheckboxCard />)}
          <CustomButton
            action={toggle}
            icon={<Send size={18} />}
            ltr
            label="Publish to Wholesalers"
          />
          <CustomButton
            altColor
            action={toggle}
            icon={<Globe2 size={18} />}
            ltr
            label="Publish to Public"
          />
        </Flex>}
      </Modal>
      <Card mb="sm" p="xs" withBorder>
        <Flex justify="space-between" align="center">
          <Title order={5}>Total Price</Title>
          <Text c="dimmed">{347 * 7}.00 ETB</Text>
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
        <CustomButton
          action={() => {
            setSubmissionState("Order");
            toggle();
          }}
          icon={<ShoppingBag size={18} />}
          ltr
          label="ORDER"
        />
        <CustomButton
          action={() => {
            setSubmissionState("Request");
            toggle();
          }}
          icon={<Send size={18} />}
          ltr
          altColor
          label="PUBLISH REQUEST"
        />
      </Group>
    </RootShell>
  );
}
