import React, { createContext, useState } from "react";

const GlobalContext = createContext({});
const { Provider } = GlobalContext;

const GlobalProvider = ({ children }) => {
    const [globalStep, setGlobalStep] = useState(1);
    const [isBudgetAvailable, setIsBudgetAvailable] = useState(false);
    const [budget, setBudget] = useState(0);
    const [isChangingSanitary, setIsChangingSanitary] = useState(false);
    const [selectedToilet, setSelectedToilet] = useState({ name: "", price: 0 });
    const [selectedSink, setSelectedSink] = useState({ name: "", price: 0 });
    const [selectedBathtub, setSelectedBathtub] = useState({ name: "", price: 0 });
    const [isChangingFloorTiling, setIsChangingFloorTiling] = useState(false);
    const [floorTilingType, setFloorTilingType] = useState("");
    const [selectedFloorTiling, setSelectedFloorTiling] = useState({ name: "", price: 0 });
    const [bathroomSize, setBathroomSize] = useState({ name: "", size: 0 })

    return (
        <Provider
            value={{
                globalStep,
                setGlobalStep,
                isBudgetAvailable,
                setIsBudgetAvailable,
                budget,
                setBudget,
                isChangingSanitary,
                setIsChangingSanitary,
                selectedToilet,
                setSelectedToilet,
                selectedSink,
                setSelectedSink,
                selectedBathtub,
                setSelectedBathtub,
                isChangingFloorTiling,
                setIsChangingFloorTiling,
                floorTilingType,
                setFloorTilingType,
                selectedFloorTiling,
                setSelectedFloorTiling,
                bathroomSize,
                setBathroomSize
            }}
        >
            {children}
        </Provider>
    )
}

export { GlobalContext, GlobalProvider }