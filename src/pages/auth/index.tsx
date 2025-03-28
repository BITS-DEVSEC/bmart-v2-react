import { Container, Box, Flex, Title } from "@mantine/core";
import { ChevronsRightIcon, Globe, Hand } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { ContainedInputs } from "../../components/ui/inputs/text";

export default function Auth() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box miw={"100%"} mih={500} bg="primary">
        <Box
          bg="primary.8"
          style={{
            height: 500,
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        ></Box>
        <Box
          bg="primary.8"
          style={{
            height: 500,
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
            <Flex justify="space-between" align="center" gap={20}>
              <Title order={4}>Hey There, Welcome to BMart</Title>
              <Flex justify="flex-end">
                <Hand size={40} />
              </Flex>
            </Flex>
            <ContainedInputs
              mt="sm"
              label="Enter you FAYDA (FAN) Identification Number"
              placeholder="1234 5678 9012 3456"
            />
          </Box>
          <Flex direction="column" gap={10}>
            <CustomButton
              action={() => navigate("/auth/personal-details")}
              icon={<ChevronsRightIcon size={20} />}
              ltr
              label="Continue"
            />
            <CustomButton
              altColor
              action={() => navigate("/")}
              icon={<Globe size={20} />}
              ltr
              label="Browse Market"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
