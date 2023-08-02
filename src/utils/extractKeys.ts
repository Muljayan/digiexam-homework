const extractKeys = (obj: Record<string, {regex: RegExp, message:string}>) => {
    const keys = Object.keys(obj).map(key => key)
    return keys
}
export default extractKeys;