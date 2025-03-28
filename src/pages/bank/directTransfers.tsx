import { Drawer, Textarea, TextInput, Title } from "@mantine/core";
import CustomButton from "../../components/ui/button";
import { Check } from "lucide-react";

export default function DirectTransfer({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Drawer
      title={<Title order={5}>Direct Transfer</Title>}
      opened={opened}
      onClose={toggle}
    >
      <TextInput placeholder="To Acc" />
      <TextInput mt="xs" placeholder="Amount" />
      <Textarea mt="xs" placeholder="Remark" />
      <CustomButton
        icon={<Check size={16} />}
        action={toggle}
        props={{ mt: "sm" }}
        label="Transfer"
        ltr
      />
    </Drawer>
  );
}
