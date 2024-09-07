'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { nameStore, AppStore } from '@/lib/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore >();
    if (!storeRef.current) {
        storeRef.current = nameStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}
