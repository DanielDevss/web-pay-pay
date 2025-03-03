import { DataTable } from "@/components/datatable/DataTable"
import KeyColumns from "@/components/pages/keys/columns"
import { Button } from "@/components/ui/button"
import useKey from "@/hooks/useKey"
import FormKey from "./partials/FormKey"
import AlertDelete from "./partials/AlertDelete"
import EmptyData from "@/components/EmptyData"
import Loading from "@/components/Loading"
import useDocumentTitle from "@/hooks/useDocumentTitle"

const Keys = () => {

  const {
    keys, 
    loading,
    handleOpenCreate, 
    openDialog, 
    handleCloseDialog, 
    handleCreate, 
    handleUpdate,
    handleOpenUpdate, 
    handleOpenAlertDelete, 
    handleCloseAlertDelete, 
    handleDelete, 
    openAlertDelete, 
    keyData, 
    processing
  } = useKey()

  const columns = KeyColumns({
    onDelete: handleOpenAlertDelete,
    onEdit: handleOpenUpdate
  })

  useDocumentTitle("Registro de llaves")

  if(loading) return <Loading />

  return (
    <>
      {keys && keys.length > 0 ? (
        <DataTable
          data={keys!}
          columns={columns}
          actions={(
            <>
              <Button onClick={handleOpenCreate}>
                Generar una llave
              </Button>
            </>
          )}
        />
      ) : (
        <EmptyData 
          text="No se encontró ninguna llave registrada en la base de datos. ¿Deseas agregar una?" 
          onAction={handleOpenCreate} 
          actionLabel="Generar una llave"
        />
      )}

      <AlertDelete 
        keyData={keyData}
        onDelete={handleDelete}
        onHide={handleCloseAlertDelete}
        open={openAlertDelete}
      />

      <FormKey
        processing={processing}
        onSubmit={keyData ? handleUpdate : handleCreate}
        open={openDialog}
        onHide={handleCloseDialog}
        keyData={keyData || undefined}
      />
    </>
  )
}

export default Keys
