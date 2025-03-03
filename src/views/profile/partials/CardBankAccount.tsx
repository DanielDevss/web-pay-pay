import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BankDataType } from '@/types/bank.type'
import { UserDataType } from '@/types/user.types'
import FormBankAccount from './FormBankAccount'
import { FormEvent } from 'react'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import Alert from '@/components/Alert'
import { Info } from 'lucide-react'

type CardBankAccountType = {
    userData?: UserDataType
    bankData?: BankDataType
    handleStore: (event: FormEvent<HTMLFormElement>) => void
    processing: boolean,
    updating: boolean,
    onToggleUpdate: () => void
}

const CardBankAccount = ({ userData, bankData, handleStore, processing, updating, onToggleUpdate }: CardBankAccountType) => {


    if (!userData?.documentsSent) return <Alert icon={Info} title='Información incompleta'>Completa tu información de cuenta para poder agregar una cuenta bancaria</Alert>

    if(!bankData || updating) return (
        <FormBankAccount 
            onToggleUpdate={onToggleUpdate} 
            processing={processing} 
            handleSubmit={handleStore} 
            updating={updating} 
        />
    )

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <h2>Cuenta bancaria</h2>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className='font-bold'>Banco</TableCell>
                                <TableCell className='text-end'>{bankData.bankName}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-bold'>Estado de cuenta</TableCell>
                                <TableCell className='text-end'>{bankData.bankStatus}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className='font-bold'>Número de cuenta</TableCell>
                                <TableCell className='text-end'>{bankData.bankAccount}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter>
                    <Button onClick={onToggleUpdate}>
                        Actualizar cuenta
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardBankAccount
