import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  LoadingOverlay,
  PinInput,
  SimpleGrid,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { Trash2, LockKeyhole, Delete } from "lucide-react";
import { useEffect, useState } from "react";

export default function PinPass() {
  const [pin, setPin] = useState<string>("");
  const [passing, setPassing] = useState<boolean>(false)

  const handleNumberClick = (value: number | string) => {
    if (pin.length < 6) {
      setPin((prev) => prev + value);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleWipe = () => {
    setPin("");
  };

  const [debouncedPin] = useDebouncedValue(pin, 1000);

  useEffect(() => {
    if (debouncedPin.length === 6) {
      setPassing(true);
      setTimeout(() => {
        setPassing(false);
        setPin("");
      }, 1000);
    }
  }, [debouncedPin]);

  return (
    <Box>
      <LoadingOverlay visible={passing} />
      <Box miw={"100%"} mih={"30vh"} bg="primary" pos="relative">
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        />
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            left: 20,
          }}
        />
        <Container pt="xl" size="sm">
          <Flex align="center" justify="center" direction="column" pt="xl">
            <LockKeyhole size={32} color="white" />
            <Title c="white" mt="xs" order={4}>
              Security Check
            </Title>
          </Flex>
        </Container>
      </Box>

      <Container size="sm">
        <Flex mb="xl" direction="column" align="center" mt="lg">
          <Text fw={700} mb="xs" c="dimmed" size="sm">
            PLEASE ENTER YOUR PIN
          </Text>
          <PinInput
            mask
            length={6}
            size="md"
            value={pin}
            onChange={setPin}
            readOnly
          />
        </Flex>

        <SimpleGrid
          style={{ position: "absolute", bottom: 25, left: "5%", width: "90%" }}
          cols={3}
          spacing="xs"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "delete", 0, "back"].map(
            (opt, index) => (
              <UnstyledButton
                style={{
                  transition: "background-color 0.2s ease, transform 0.1s ease",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  display: "inline-block",
                  backgroundColor: "transparent",
                }}
                onTouchStart={(e: any) => {
                  e.target.style.transform = "scale(0.78)";
                }}
                onTouchEnd={(e: any) => {
                  e.target.style.transform = "scale(1)";
                }}
                onTouchCancel={(e: any) => {
                  e.target.style.transform = "scale(1)";
                }}
                key={index}
                onClick={() => {
                  if (opt === "delete") handleWipe();
                  else if (opt === "back") handleDelete();
                  else handleNumberClick(opt);
                }}
              >
                <Card
                  withBorder
                  padding="md"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.1s",
                    ":active": { transform: "scale(0.95)" },
                  }}
                >
                  <Center style={{ height: 40 }}>
                    {opt === "back" ? (
                      <Delete size={20} />
                    ) : opt === "delete" ? (
                      <Trash2 color="red" size={20} />
                    ) : (
                      <Text c="gray.8" size="xl" fw={500}>
                        {opt}
                      </Text>
                    )}
                  </Center>
                </Card>
              </UnstyledButton>
            )
          )}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
