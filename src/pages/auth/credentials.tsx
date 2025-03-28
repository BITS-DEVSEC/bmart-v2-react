import { Anchor, Box, Checkbox, Container, Flex, Group, PinInput, Text, Title } from "@mantine/core";
import { Check, ChevronsLeft, Lock } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";

export default function Credentials() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box miw={"100%"} mih={"30vh"} bg="primary">
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        ></Box>
        <Box
          bg="primary.8"
          style={{
            height: "30vh",
            width: 30,
            position: "absolute",
            top: 0,
            left: 20,
          }}
        ></Box>
      </Box>
      <Container mt="lg">
        <Flex gap={20} direction="column">
          <Box>
            <Group justify="space-between" align="center" gap={20}>
              <Flex direction="column">
                <Title order={4}>Your Credentials</Title>
                <Text size="xs" c="dimmed">
                  ACCESS DETAILS
                </Text>
              </Flex>
              <Flex justify="flex-end">
                <Lock size={25} />
              </Flex>
            </Group>
          </Box>
        </Flex>
        <Flex mt="lg" direction="column" gap={10}>
          <PinInput size="lg" length={6} mask/>
          <Checkbox mt="lg" label={<Text size="sm">I agree to the, <Anchor fw={700}>Terms & Conditions</Anchor></Text>}/>
          <CustomButton action={() => navigate("/auth/login")} label="Finish" ltr icon={<Check size={18}/>}/>
          <CustomButton altColor action={() => navigate("/auth/address-details")} label="Back" rtl icon={<ChevronsLeft size={18}/>}/>
        </Flex>
      </Container>
    </Box>
  );
}
