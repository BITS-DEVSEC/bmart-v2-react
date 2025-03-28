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
  AtSign,
  MinusCircle,
  PhoneCall,
  PlusCircle,
  Trash2,
} from "lucide-react";

export default function CartCards() {
  return (
    <Card p="xs" withBorder>
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="sm"
        />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text>

          <Text fz="lg" fw={500} className={classes.name}>
            Robert Glassbreaker
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <AtSign size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <PhoneCall size={16} className={classes.icon} />
            <Text fz="xs" c="dimmed">
              +11 (876) 890 56 23
            </Text>
          </Group>
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
