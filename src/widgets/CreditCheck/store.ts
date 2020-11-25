import create from 'zustand'
import {configurePersist} from 'zustand-persist'

const { persist, purge } = configurePersist({
    storage: localStorage,
    rootKey: 'root',
})
type creditCheckStore = {
    creditLimit: number,
    setCreditLimit: (creditLimit: number) => void
}

export const useCreditCheckStore = create<creditCheckStore>(
    persist(
        {
            key: 'creditCheck',
            allowlist: ['creditLimit']
        }, 
        (set) => ({
            creditLimit: 30000,
            setCreditLimit: (creditLimit: number) => {
                set({creditLimit})
            }
        })
    )
)