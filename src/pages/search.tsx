import { ActionIcon, Chip, Flex, ScrollArea, TextInput } from "@mantine/core";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { RootShell } from "../components/layout/shell/root";

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <RootShell noFoot>
      <TextInput
        ref={inputRef}
        rightSection={<Search size={18} />}
        size="md"
        radius="md"
        w={"100%"}
        placeholder="Search products..."
      />
      <Flex align="center">
        <Chip.Group multiple={false} onChange={setCategory} value={category}>
          <ScrollArea type="never">
            <Flex my="xs" gap="xs">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((chip) => (
                <Chip value={chip?.toString()} size="xs" radius="sm" key={chip}>
                  Chip {chip}
                </Chip>
              ))}
            </Flex>
          </ScrollArea>
        </Chip.Group>
        <ActionIcon
          display={category ? "block" : "none"}
          variant="light"
          size="xs"
          onClick={() => setCategory("")}
        >
          <X size={16} />
        </ActionIcon>
      </Flex>
    </RootShell>
  );
}
