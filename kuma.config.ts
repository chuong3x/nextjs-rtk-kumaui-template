import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
    // colors: {
    //     brand: {
    //         100: "red",
    //     },
    // },
    // spacings: {
    //     //..
    // },
    // breakpoints: {
    //     //..
    // },
    components: {
        Button: {
            defaultProps: {
                variant: "primary",
                borderRadius: "5px",
                border: "none",
                p: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: 600,
                transition: `background-color 0.3s ease`,
            },
            variants: {
                primary: {
                    bg: " #008CBA",
                    color: "white",
                    outline: "none",
                },
                effect: {
                    position: "relative",
                    zIndex: 1,
                    bg: " #008CBA",
                    color: "white",
                    outline: "none",
                    _hover: {
                        cursor: "pointer",
                    },
                },
            },
        },
    },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
    export interface Theme extends UserTheme {}
}

export default theme;
