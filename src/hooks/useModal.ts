import { useCallback, useState } from "react";

export default (): [boolean, () => void, () => void] => {
    const [opened, setOpened] = useState(false);

    const modalOpen = useCallback(() => {
        setOpened(true);
    }, [])

    const modalClose = useCallback(() => {
        setOpened(false);
    }, [])
    return [opened, modalOpen, modalClose]
}
