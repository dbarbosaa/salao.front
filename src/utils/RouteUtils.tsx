export function getCurrentUrl(pathname: string) {
    return pathname.split(/[?#]/)[0]
}

export function checkIsActive(pathname: string, url: string) {
    const current = getCurrentUrl(pathname)
    if (!current || !url) {
        return false
    }

    if (current.toLowerCase() === url.toLowerCase()) {
        return true
    }

    if (current.toLowerCase().indexOf(url.toLowerCase()) > -1) {
        return true
    }

    return false
}