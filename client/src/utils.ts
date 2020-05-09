
export function hasImageExt(fileName: string): boolean {
    if (!fileName) return false
    if (/\.(png|jpe?g|webp|bmp)$/.exec(fileName)) {
        return true
    }

    return false
}