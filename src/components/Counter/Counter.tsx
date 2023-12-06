"use client";

import { Text, Button, VStack, HStack } from "@kuma-ui/core";

import { useAppDispatch, useAppSelector } from "@/rtk/hook";
import {
    counterSelector,
    descrease,
    increase,
} from "@/rtk/slices/counter.slice";

const Counter = () => {
    const dispatch = useAppDispatch();
    const { count } = useAppSelector(counterSelector);
    //
    const handleIncrease = () => {
        dispatch(increase());
    };
    const handleDescrease = () => {
        dispatch(descrease());
    };
    //
    return (
        <VStack alignItems={"center"}>
            <Text>{count}</Text>
            <HStack gap={8}>
                <Button variant="primary" onClick={handleIncrease}>
                    +
                </Button>
                <Button variant="primary" onClick={handleDescrease}>
                    -
                </Button>
            </HStack>
        </VStack>
    );
};

export default Counter;
