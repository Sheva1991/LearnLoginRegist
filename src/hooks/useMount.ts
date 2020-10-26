import { useMemo, useEffect } from 'react';


export default () => {
    const mountState = useMemo(
        () => ({
            mounted: false,
        }),
        []
    )

    useEffect(
        () => {
            mountState.mounted = true;
            return () => {
                mountState.mounted = false;
            }
        },
        [mountState]
    )

    return mountState
}