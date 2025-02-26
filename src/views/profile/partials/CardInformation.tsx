import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { UserDataType } from "@/types/user.types"

type CardInformationProps = {
    userData? : UserDataType
}

const CardInformation = ({ userData } : CardInformationProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Datos personales</h1>
          </CardTitle>
          <CardDescription>Información personal registrada, puedes actualizar tus datos cuando desees.</CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Nombres</TableCell>
                <TableCell>{userData?.firstName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Apellidos</TableCell>
                <TableCell>{userData?.lastName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">RFC</TableCell>
                <TableCell>{userData?.rfc || "No proporcionado"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Correo electrónico</TableCell>
                <TableCell>{userData?.email || "No proporcionado"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Número de teléfono</TableCell>
                <TableCell>{userData?.phone || "No proporcionado"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter className="flex items-center gap-2 justify-end">
          <Button variant="outline">Actualizar contraseña</Button>
          <Button variant="outline">Actualizar información</Button>
        </CardFooter>

      </Card>
    </div>
  )
}

export default CardInformation
