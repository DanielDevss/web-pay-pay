import { DataTable } from "@/components/datatable/DataTable";
import Header from "@/components/Header";
import { getColumns } from "@/components/pages/devices/columns";
import useDevices from "@/hooks/useDevices";

export default function Devices() {

    const { devices } = useDevices()

    const columns = getColumns()

    return (
        <>
            <Header title="Dispositivos" text="Registros de dispositivos que han iniciado sesión" />

            <DataTable columns={columns} data={devices} placeholder="Buscar dispositivo . . ." />
        </>
    )
}