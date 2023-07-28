import { useState } from "react";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";
import { IEmploee } from "../ModalItems";
import { setLoading } from "../../../store/LoadingStore/loading.store";


interface IUseCreateEmploee {
    create: (emploee: IEmploee) => Promise<string | undefined>;
    error: boolean;
}

export const useCreateEmploee = (): IUseCreateEmploee => {
    const [error, setError] = useState<boolean>(false);

    function showError(): void {
            setError(true);
            setTimeout(() => setError(false), 400)
    }

    async function create(emploee: IEmploee): Promise<string | undefined> {
        try {
            if(Object.values(emploee).length !== 5){
                showError();
                return;
            }
            const apiInstace = AuthController.getInstance();
            const {data} = await apiInstace.cretateEmploee({...emploee, dateBirthday: new Date(emploee.dateBirthday).toISOString()});
            const linkId = data.data;
            return linkId;
        } catch (err:any) {
            console.log(err);
            showError()
        }
    };

    return {create, error};
}