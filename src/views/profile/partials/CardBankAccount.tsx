import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { BankDataType } from '@/types/bank.type'
import { UserDataType } from '@/types/user.types'
import FormBankAccount from './FormBankAccount'
import { FormEvent } from 'react'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

type CardBankAccountType = {
    userData?: UserDataType
    bankData?: BankDataType
    handleStore: (event: FormEvent<HTMLFormElement>) => void
    processing: boolean
}

const CardBankAccount = ({ userData, bankData, handleStore, processing }: CardBankAccountType) => {

    if (!userData?.documentsSent) return

    if(!bankData) return <FormBankAccount processing={processing} handleSubmit={handleStore} />

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
                    <Button variant="outline">
                        Actualizar cuenta
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardBankAccount
