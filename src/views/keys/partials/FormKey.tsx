import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { KeyDataType, KeyFormType } from "@/types/key.types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Field from "@/components/form/Field";

type FormKeyProps = {
  open: boolean;
  onHide: () => void;
  keyData?: KeyDataType;
  onSubmit: (data: KeyFormType) => void;
  processing: boolean;
};

const FormKey = ({ onHide, open, keyData, onSubmit, processing }: FormKeyProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<KeyFormType>();

  // Resetear los valores del formulario cuando `keyData` cambie
  useEffect(() => {
    if (keyData) {
        reset({
            name: keyData.name || "",
            production: true
        });
    } else {
        reset({
            name: "",
            production: true
        });
    }
}, [keyData, reset]);

  const onOpenChange = () => {
    onHide();
    reset();
  };

  const onFormSubmit = async (data: KeyFormType) => {
    await onSubmit({...data});
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <DialogHeader>
            <DialogTitle>
              {keyData ? "Editar llave" : "Crear nueva llave"}
            </DialogTitle>
          </DialogHeader>

          <fieldset className="my-5">
          <Field
            id={keyData ? `inpName_${keyData.id}` : "inpName"}
            required
            maxLength={10}
            placeholder="Asigna un nombre para identificar la llave"
            {...register("name", { required: true })}
            error={errors.name?.type === "required" ? "Este campo es obligatorio" : undefined}
          >
            Nombre de la llave
          </Field>
          </fieldset>

          <DialogFooter>
            <Button type="button" variant="secondary" onClick={onHide}>
              <XCircle />
              Cancelar
            </Button>

            <Button type="submit" variant="default">
              {processing ? <Loader2 className="animate-spin" /> : <CheckCircle />}
              {keyData
                ? processing
                  ? "Actualizando..."
                  : "Actualizar"
                : processing
                ? "Generando..."
                : "Generar llave"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormKey;
