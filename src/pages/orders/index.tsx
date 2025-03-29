import { useState } from "react";
import { ScrollArea, Tabs } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { Incoming } from "./orderIn";
import { Outgoing } from "./orderOut";

export default function Orders() {
  const [activeTab, setActiveTab] = useState<string | null>("pr");

  return (
    <RootShell>
      <Tabs variant="outline" value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow>
          <Tabs.Tab value="pr">Incoming Orders</Tabs.Tab>
          <Tabs.Tab value="rq">Outgoing Orders</Tabs.Tab>
        </Tabs.List>

        <ScrollArea h="calc(100vh - 216px)" mt="xs" type="never">
          <Tabs.Panel value="pr">
            <Incoming />
          </Tabs.Panel>
          <Tabs.Panel value="rq">
            <Outgoing />
          </Tabs.Panel>
        </ScrollArea>
      </Tabs>
    </RootShell>
  );
}
