import { useState } from "react";
import { ScrollArea, Tabs } from "@mantine/core";
import { RootShell } from "../../components/layout/shell/root";
import { PublishedRequests } from "./publishedRequests";
import { RequestQuotations } from "./requestQuotations";

export default function Requests() {
  const [activeTab, setActiveTab] = useState<string | null>("pr");

  return (
    <RootShell>
      <Tabs variant="pills" value={activeTab} onChange={setActiveTab}>
        <Tabs.List grow>
          <Tabs.Tab value="pr">Published Requests</Tabs.Tab>
          <Tabs.Tab value="rq">Request Quotations</Tabs.Tab>
        </Tabs.List>

        <ScrollArea h="calc(100vh - 215px)" mt="xs" type="never">
          <Tabs.Panel value="pr">
            <PublishedRequests />
          </Tabs.Panel>
          <Tabs.Panel value="rq">
            <RequestQuotations />
          </Tabs.Panel>
        </ScrollArea>
      </Tabs>
    </RootShell>
  );
}
