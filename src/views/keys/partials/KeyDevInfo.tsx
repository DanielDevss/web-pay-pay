import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useKey from "@/hooks/useKey";
import { formatFullDate } from "@/lib/formats";
import { History } from "lucide-react";
import { Link } from "react-router-dom";

export default function KeyDevInfo () {

    const { keys, loading } = useKey(false)

    if(loading) {
        return <Loading />
    }

    return (
        <div className="border rounded-lg">
            <Table className="table-">
                <TableHeader>
                    <TableRow>
                        <TableHead>Nombre del proyecto</TableHead>
                        <TableHead>Api Key</TableHead>
                        <TableHead className="text-end">Actualizada el</TableHead>
                        <TableHead className="text-end">Registrada el</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {keys?.map(key => (
                        <TableRow key={key.id}>
                            <TableCell className="font-bold">{key.name}</TableCell>
                            <TableCell>{key.key}</TableCell>
                            <TableCell align="right">{formatFullDate(key.updatedAt)}</TableCell>
                            <TableCell align="right">{formatFullDate(key.createdAt)}</TableCell>
                            <TableCell align="right">
                                <Button asChild variant={"link"}>
                                    <Link to={`/administrador/llaves-de-acceso/${key.id}`}>
                                        <History />
                                        Pagos realizados
                                    </Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}