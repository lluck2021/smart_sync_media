import { createContext, useState, useMemo } from "react";
import { createTheme} from "@mui/material";


export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {

            primaryAccent: {
                100: "#169B62",
            },
            background: {
                default: '#0a9138', //green background
            },
            primary: {
                100: "#169B62",
                200: "#139c13",//green side bar
                
            },
            secondary: {
                100: "#FF883E", //orange 
                200: "#fc7521",
            },
        }
        : {

            primaryAccent: {
                100: "#169B62",
            },
            background: {
                default: '#1ec918',
            },
            primary: {
                100: "#169B62",
                200: "#03a339",
            },
            secondary: {
                100: "#FF883E",
            },

        }),
})

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.primaryAccent[100],
                    },
                    neutral: {
                        dark: colors.secondary[100],
                        main: colors.secondary[100],
                        light: colors.secondary[100],
                    },
                    background: {
                        default: colors.primary[100],
                    },

                }

                : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.primaryAccent[100],
                    },
                    neutral: {
                        dark: colors.secondary[100],
                        main: colors.secondary[100],
                        light: colors.secondary[100],
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }
            )

        },

        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 14,
            },
        }
    }
};

export const ColorModeContext = createContext({
    toggleColorMode: () => { }
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}