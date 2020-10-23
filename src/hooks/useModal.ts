import { useCallback, useState } from "react";

export const useModal = () => {
    const [opened, setOpened] = useState(false);

    const Open = useCallback(() => {
        setOpened(true);
    }, [])

    const Close = useCallback(() => {
        setOpened(false);
    }, [])
    return { opened, Open, Close }
}
