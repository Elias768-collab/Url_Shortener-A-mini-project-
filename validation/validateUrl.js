export function validateUrl(data) {
    const {id, originalUrl, shortCode } = data;

    if (!id) {
        return "ID is required"
    }

    if (!originalUrl) {
        return "Original URL is required"
    }

    if (!shortCode) {
        return "Short code is required"
    }

    return null
}