import { DataTable } from "@/components/datatable/DataTable"
import KeyColumns from "@/components/pages/keys/columns"
import { Button } from "@/components/ui/button"
import useKey from "@/hooks/useKey"
import FormKey from "./partials/FormKey"
import AlertDelete from "./partials/AlertDelete"
import EmptyData from "@/components/EmptyData"
import Loading from "@/components/Loading"
import Header from "@/components/Header"
import Divider from "@/components/Divider"

const Keys = () => {

  const {
    keys,
    loading,
    handleOpenCreate,
    openDialog,
    handleCloseDialog,
    handleCreate,
    handleUpdate,
    handleOpenAlertDelete,
    handleCloseAlertDelete,
    handleDelete,
    openAlertDelete,
    keyData,
    processing
  } = useKey()

  const columns = KeyColumns({
    onDelete: handleOpenAlertDelete,
  })

  if (loading) return <Loading />

  return (
    <>
      <Header title="Llaves de acceso" text="Registros de bearer tokens para tu sistema">
        <Button onClick={handleOpenCreate}>
          Generar una llave
        </Button>
      </Header>

      <section>
        <Divider text="Claves de acceso en productivo" />

        {keys && keys.length > 0 ? (
          <DataTable
            data={keys!}
            columns={columns}
            placeholder="Buscar proyecto . . ."
          />
        ) : (
          <EmptyData
            text="No se encontró ninguna llave registrada en la base de datos. ¿Deseas agregar una?"
            onAction={handleOpenCreate}
            actionLabel="Generar una llave"
          />
        )}
      </section>

      <section className="mt-10">
        <Divider text="Clave de acceso para desarrollo" />
      </section>


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
