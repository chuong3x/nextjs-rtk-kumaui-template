import { Text, VStack } from "@kuma-ui/core";
import CounterParent from "./CounterParent";
import TextParent from "./TextParent";

export default function Home() {
    return (
        <VStack as="main" alignItems={"center"}>
            <Text>Hello world!</Text>
            <CounterParent />
            <TextParent />
        </VStack>
    );
}
