import {
  ActionIcon,
  Avatar,
  Card,
  Flex,
  Group,
  Text,
  TextInput,
} from "@mantine/core";
import classes from "./cc.module.css";
import {
  MinusCircle,
  PlusCircle,
  Trash2,
} from "lucide-react";

export default function CartCards() {
  return (
    <Card p="xs" withBorder>
      <Group wrap="nowrap">
        <Avatar
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          size={94}
          radius="sm"
        />
        <div>
          <Text fz="lg" fw={500} className={classes.name}>
            Forde, Norway
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <Text lineClamp={2} fz="xs" c="dimmed">
            Relax, rejuvenate and unplug in this unique contemporary Birdbox. Feel
          close to nature in ultimate comfort. Enjoy the view of the epic
          mountain range of Blegja and the Førdefjord.
            </Text>
          </Group>
          <Text>347 ETB</Text>
        </div>
      </Group>
      <Card mt="xs" withBorder p="xs">
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={10}>
            <TextInput
              maw={120}
              rightSectionWidth={55}
              rightSection={
                <Flex>
                  <ActionIcon variant="transparent">
                    <MinusCircle size={16} color="orange" />
                  </ActionIcon>
                  <ActionIcon variant="transparent">
                    <PlusCircle size={16} color="green" />
                  </ActionIcon>
                </Flex>
              }
              value={1}
              size="xs"
            />
          </Flex>
          <ActionIcon color="red" variant="light">
            <Trash2 size={18} color="red" />
          </ActionIcon>
        </Flex>
      </Card>
    </Card>
  );
}
