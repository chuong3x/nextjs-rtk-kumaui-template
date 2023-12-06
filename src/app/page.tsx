import Counter from "@/components/Counter/Counter";
import { Button, Text, VStack } from "@kuma-ui/core";

export default function Home() {
    return (
        <VStack as="main" alignItems={"center"}>
            <Text>Hello world!</Text>
            <Counter />
        </VStack>
    );
}
