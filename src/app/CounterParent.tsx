import Counter from "@/components/Counter/Counter";

import StoreProvider from "./StoreProvider";

const CounterParent = () => {
    return (
        <StoreProvider>
            <Counter />
        </StoreProvider>
    );
};

export default CounterParent;
