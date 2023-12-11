import StoreProvider from "./StoreProvider";
import TextComponent from "@/components/Text/TextComponent";

const TextParent = () => {
    return (
        <StoreProvider>
            <TextComponent />
        </StoreProvider>
    );
};

export default TextParent;
