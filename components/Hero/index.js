import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SplitScreen() {
  const SubHeaderTextColor = useColorModeValue("blue.800", "white");
  const HeaderTextColor = useColorModeValue("#00A4BD", "#00A4BD");
  const HeaderTextColo2 = useColorModeValue("#116EBE", "#116EBE");

  return (
    <>
      <Stack minH="80vh" direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "m", md: "xl", lg: "2xl" }}>
              <Text
                fontFamily="monospace"
                as={"span"}
                position={"relative"}
                color={HeaderTextColo2}
                mr={4}
              >
                NFtask(.Me),
              </Text>

              <Text fontFamily="monospace" color={HeaderTextColor} as={"span"}>
                connecting talent with web3 projects, one task at a time...
              </Text>
            </Heading>
            <Text
              fontFamily="monospace"
              fontSize={{ base: "md", lg: "2xl" }}
              color={SubHeaderTextColor}
            >
              A true web3 freelance marketplace service - That connects talent to
              open projects, showcasing opportunities for success. Accelerating the
              use of decentralized storage in new ways.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                textColor="white"
                borderRadius="full"
                bgColor="#116EBE"
                shadow="lg"
                fontSize="m"
                textTransform="uppercase"
                fontWeight="normal"
                as="kbd"
                letterSpacing={2}
                textDecoration="none"
              >
                <Link href={"bridgeApp"}>Find Talent</Link>
              </Button>
              <Button
                textColor="white"
                borderRadius="full"
                bgColor="#116EBE"
                shadow="lg"
                fontSize="m"
                textTransform="uppercase"
                fontWeight="normal"
                as="kbd"
                letterSpacing={2}
                textDecoration="none"
              >
                <Link href={"bridgeApp"}>Find Work</Link>
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex px={5} flex={1}>
          <Image
            alt={"cover-image"}
            borderTopRightRadius="10rem"
            borderBottomLeftRadius="10rem"
            borderTopLeftRadius="15rem"
            borderBottomRightRadius="15rem"
            objectFit="cover"
            height={600}
            maxW="100%"
            my="auto"
            src="/working.svg"
          />
        </Flex>
      </Stack>
    </>
  );
}
