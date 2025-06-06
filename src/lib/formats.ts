import dayjs from "dayjs"

export const formatFullDate = (str_date : string) => {
    return dayjs(str_date).format("DD/MMM/YYYY - hh:mm a")
}

export const formatNumberToAmount = (amount: number) => {
    const formatted = new Intl.NumberFormat('MX', {
        currency: 'mxn', 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        style: 'currency',
    })
    return formatted.format(amount)
}