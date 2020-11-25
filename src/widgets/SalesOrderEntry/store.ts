import create from 'zustand'

type salesOrderEntry = {
    itemName: string,
    price: number,
    quantity: number
}

type salesOrderStore = {
    salesOrderEntries: Array<salesOrderEntry>,
    total: number,
    addEntry: (entry: salesOrderEntry) => void
}
export const useSalesOrderStore = create<salesOrderStore>(
    (set, get) => ({
        salesOrderEntries: [],
        total: 0,
        addEntry: (entry) => {
            const entries = get().salesOrderEntries
            let total = entries.reduce((accumulator, item) => accumulator + (item.quantity * item.price), 0)
            total += (entry.quantity * entry.price)
            set({salesOrderEntries: [...entries, entry], total})
        }
    }))