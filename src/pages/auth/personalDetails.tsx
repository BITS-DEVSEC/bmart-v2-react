import { Container, Box, Flex, Title, Group } from "@mantine/core";
import { ChevronsRightIcon, IdCardIcon } from "lucide-react";
import { ContainedInputs } from "../../components/ui/inputs/text";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { ContainedSelect } from "../../components/ui/inputs/select";
import { ContainedDates } from "../../components/ui/inputs/date";

export default function PersonalDetails() {
  const navigate = useNavigate();

  return (
    <Box>
      <Box miw={"100%"} mih={200} bg="primary">
        <Box
          bg="primary.8"
          style={{
            height: 200,
            width: 30,
            position: "absolute",
            top: 0,
            right: 20,
          }}
        ></Box>
        <Box
          bg="primary.8"
          style={{
            height: 200,
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
              <Title order={4}>Your FAYDA Information</Title>
              <Flex justify="flex-end">
                <IdCardIcon size={25} />
              </Flex>
            </Group>
            {[
              { title: "Full Name", placeholder: "Enter your full name" },
              { title: "Phone Number", placeholder: "Enter your phone number" },
            ].map((item, index) => (
              <ContainedInputs
                mt="xs"
                key={index}
                label={item.title}
                placeholder={item.placeholder}
              />
            ))}
            <Group grow justify="space-between">
              {[
                { title: "Gender", placeholder: "Gender" },
                {
                  title: "Nationality",
                  placeholder: "Nationality",
                },
              ].map((item, index) => (
                <ContainedSelect
                  mt="xs"
                  key={index}
                  label={item.title}
                  placeholder={item.placeholder}
                />
              ))}
            </Group>
            <ContainedDates
              mt="xs"
              label="Date of Birth"
              placeholder="Enter your date of birth"
            />
          </Box>
          <CustomButton
            action={() => navigate("/auth/personal-details")}
            icon={<ChevronsRightIcon size={20} />}
            ltr
            label="Continue"
          />
        </Flex>
      </Container>
    </Box>
  );
}
