export const STORAGE = {
    setItem(name: string, value: any) {
        localStorage.setItem(name, value)
    },
    getItem(name: string) {
        return localStorage.getItem(name)
    },
    clear() {
        localStorage.clear()
    }
}