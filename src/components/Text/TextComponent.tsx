"use client";

import { useState } from "react";
import { Button, VStack, Input, Text } from "@kuma-ui/core";

import { useAppDispatch, useAppSelector } from "@/rtk/hook";
import { reset, set, textSelector } from "@/rtk/slices/text.slice";

const TextComponent = () => {
    const dispatch = useAppDispatch();
    const { text } = useAppSelector(textSelector);

    const [textState, setTextState] = useState<string>("");
    //
    const handleSetText = () => {
        dispatch(set(textState));
    };
    const handleResetText = () => {
        dispatch(reset());
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextState(event.target.value);
    };
    return (
        <VStack>
            <Text>Text store</Text>
            <Text>{text}</Text>
            <Input value={textState} onChange={handleChange} />
            <Button onClick={handleSetText}>Set</Button>
            <Button onClick={handleResetText}>Reset</Button>
        </VStack>
    );
};

export default TextComponent;
