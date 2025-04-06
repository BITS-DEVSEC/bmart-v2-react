import { Container, Box, Flex, Title, Group, Text } from "@mantine/core";
import { CheckIcon, ChevronsLeftIcon, IdCardIcon } from "lucide-react";
import CustomButton from "../../components/ui/button";
import { useNavigate } from "react-router";
import { ContainedSelect } from "../../components/ui/inputs/select";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function AddressDetails() {
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
                  ADDRESS DETAILS
                </Text>
              </Flex>
              <Flex justify="flex-end">
                <IdCardIcon size={25} />
              </Flex>
            </Group>
            {[
              { title: "City", placeholder: "City", data: ["Addis Ababa"] },
            ].map((item, index) => (
              <ContainedSelect
                value={user.city}
                mt="xs"
                data={item.data}
                key={index}
                label={item.title}
                placeholder={item.placeholder}
              />
            ))}
            <Group grow justify="space-between">
              {[
                { title: "SubCity", placeholder: "SubCity", data: ["Bole", "Yeka", "Lemi kura"] },
                {
                  title: "Woreda",
                  placeholder: "Woreda",
                  data: ["01", "02", "08"]
                },
              ].map((item, index) => (
                <ContainedSelect
                  value={index == 0 ? user.subcity : user.woreda}
                  mt="xs"
                  data={item.data}
                  key={index}
                  label={item.title}
                  placeholder={item.placeholder}
                />
              ))}
            </Group>
          </Box>
          <Flex direction="column" gap={10}>
            <CustomButton
              action={() => navigate("/auth/business-details")}
              icon={<CheckIcon size={20} />}
              ltr
              label="Continue"
            />
            <CustomButton
              altColor
              action={() => navigate("/auth/personal-details")}
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
