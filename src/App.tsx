import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.less";
import { ColorSchemeProvider, MantineProvider } from "@mantine/styles";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import useAppState from "./store/app";

function App() {
  const elements = useRoutes(routes);
  const { colorScheme, toggleColorScheme } = useAppState();

  return (
    <div className="App">
      <ColorSchemeProvider
        toggleColorScheme={toggleColorScheme}
        colorScheme={colorScheme}
      >
        <MantineProvider
          theme={{
            headings: {
              fontWeight: 500,
            },
            primaryColor:'grape',
            colorScheme: colorScheme,
          }}
          withNormalizeCSS
          withCSSVariables
          withGlobalStyles
        >
          {elements}
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
