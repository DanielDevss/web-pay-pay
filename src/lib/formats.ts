import dayjs from "dayjs"

export const formatFullDate = (str_date : string) => {
    return dayjs(str_date).format("DD/MMM/YYYY - hh:mm a")
}