/**
 * Формирует FormData из объекта
 * @param {Object} obj
 * @returns {FormData}
 */
export default function objectToFormData(obj = {}) {
    let fd = new FormData
    for (let [key, value] of Object.entries(obj)) {
        fd.append(key, value)
    }
    return fd
}