import { useState } from "react";
import { ScrollArea, Tabs } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { DQuotations } from "./quotations";
import { DOutgoing } from "./orders";
import { DRequests } from "./requests";

export default function Deliveries() {
  const [activeTab, setActiveTab] = useState<string | null>("r");

  return (
    <RootShell>
      <Tabs variant="outline" value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow >
          <Tabs.Tab value="r">Requests</Tabs.Tab>
          <Tabs.Tab value="q">Quotations</Tabs.Tab>
          <Tabs.Tab value="o">Orders</Tabs.Tab>
        </Tabs.List>

        <ScrollArea h="calc(100vh - 216px)" mt="xs" type="never">
          <Tabs.Panel value="r">
            <DRequests />
          </Tabs.Panel>
          <Tabs.Panel value="q">
            <DQuotations />
          </Tabs.Panel>
          <Tabs.Panel value="o">
            <DOutgoing />
          </Tabs.Panel>
        </ScrollArea>
      </Tabs>
    </RootShell>
  );
}
