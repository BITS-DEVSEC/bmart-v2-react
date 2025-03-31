import { Drawer, Title } from "@mantine/core";
import CustomButton from "../../components/ui/button";
import { Check } from "lucide-react";
import { ContainedInputs } from "../../components/ui/inputs/text";
import { ContainedInputAreas } from "../../components/ui/inputs/textarea";

export default function DirectTransfer({
  opened,
  toggle,
  toggleStatus
}: {
  opened: boolean;
  toggle: () => void;
  toggleStatus: () => void
}) {
  
  return (
    <>
      <Drawer
        transitionProps={{
          transition: "slide-up",
          duration: 350,
          timingFunction: "linear",
        }}
        title={<Title order={5}>Direct Transfer</Title>}
        opened={opened}
        onClose={toggle}
      >
        
        <ContainedInputs label="To Acc" placeholder="To Acc" />
        <ContainedInputs label="Amount" mt="xs" placeholder="Amount" />
        <ContainedInputAreas
          lim
          minr={5}
          label="Remark"
          mt="xs"
          placeholder="Remark"
        />
        <CustomButton
          icon={<Check size={16} />}
          action={() => {
            toggleStatus();
          }}
          props={{ mt: "sm" }}
          label="Transfer"
          ltr
        />
      </Drawer>
    </>
  );
}
