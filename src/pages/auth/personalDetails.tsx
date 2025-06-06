import { Container, Box, Flex, Title, Group, Text } from "@mantine/core";
import { ChevronsLeftIcon, ChevronsRightIcon, IdCardIcon } from "lucide-react";
import { ContainedInputs } from "../../components/ui/inputs/text";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { ContainedSelect } from "../../components/ui/inputs/select";
import { ContainedDates } from "../../components/ui/inputs/date";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function PersonalDetails() {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

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
                <Title order={4}>Your FAYDA Information</Title>
                <Text size="xs" c="dimmed">
                  PERSONAL DETAILS
                </Text>
              </Flex>
              <Flex justify="flex-end">
                <IdCardIcon size={25} />
              </Flex>
            </Group>
            {[
              { title: "Full Name", placeholder: "Enter your full name" },
              { title: "Phone Number", placeholder: "Enter your phone number" },
            ].map((item, index) => (
              <ContainedInputs
                value={index == 0 ? user.fullName : user.phoneNumber}
                mt="xs"
                key={index}
                label={item.title}
                placeholder={item.placeholder}
              />
            ))}
            <Group grow justify="space-between">
              {[
                { title: "Gender", placeholder: "Gender", data: ["Male", "Female"] },
                {
                  title: "Nationality",
                  placeholder: "Nationality",
                  data: ["Ethiopian", "Other"]
                },
              ].map((item, index) => (
                <ContainedSelect
                  value={index == 0 ? user.gender : user.nationality}
                  data={item.data}
                  mt="xs"
                  key={index}
                  label={item.title}
                  placeholder={item.placeholder}
                />
              ))}
            </Group>
            <ContainedDates
              value={user.dateofbirth ? new Date(user.dateofbirth) : undefined}
              mt="xs"
              label="Date of Birth"
              placeholder="Enter your date of birth"
            />
          </Box>
          <Flex direction="column" gap={10}>
            <CustomButton
              action={() => navigate("/auth/address-details")}
              icon={<ChevronsRightIcon size={20} />}
              ltr
              label="Continue"
            />
            <CustomButton
              altColor
              action={() => navigate("/auth")}
              icon={<ChevronsLeftIcon size={20} />}
              rtl
              label="Back"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
