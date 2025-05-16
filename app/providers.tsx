
"use client";

import { WagmiProvider, cookieToInitialState } from "wagmi";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { TenstackProviders } from "./tenstack-provider";
import { config } from "@/lib/config";

type Props = {
    children: React.ReactNode;
    cookie: string | null;
};

export default function Providers({ children, cookie }: Props) {
    const initialState = cookieToInitialState(config, cookie);

    return (
        <WagmiProvider config={config} initialState={initialState} >
                    <TenstackProviders>
                        <RainbowKitProvider
                            theme={darkTheme({
                                accentColor: "#0E76FD",
                                accentColorForeground: "white",
                                borderRadius: "large",
                                fontStack: "system",
                                overlayBlur: "small",
                            })}
                        >
                            {children}
                        </RainbowKitProvider>
                    </TenstackProviders>
        </WagmiProvider>
    );
}