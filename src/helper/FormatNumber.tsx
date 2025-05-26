export const formatNumber = (number: number): string => {
    return number.toLocaleString('vi-Vn', {
        style: 'currency',
        currency: 'VND',
    })
}