/**
 * Generate unique key
 * @return {String} Generated key
 */
export function generateUniqueKey() {
    return `key_${new Date().getTime() + Math.random().toString(36).substr(2)}`;
}