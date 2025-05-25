import { getData } from "@/data/devices";
import { DeviceType } from "@/types/devices";
import { useEffect, useState } from "react";

export default function useDevices () {
    const [devices, setDevices] = useState<DeviceType[]>([])
    const [pending, setPending] = useState(true)

    const getDevices = async() => {
        setPending(true)
        const data = await getData()
        setDevices(data)
        setPending(false)
    }

    useEffect(() => {
        getDevices()
    }, [])

    return {
        devices,
        pending
    }
}