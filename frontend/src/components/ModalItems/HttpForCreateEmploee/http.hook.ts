import { useState } from "react";
import { AuthController } from "../../../http/controllers/AuthController/auth.controller";
import { IEmploee } from "../ModalItems";
import { setMessage } from "../../../store/MessageStore/message.store";


interface IUseCreateEmploee {
    create: (emploee: IEmploee) => Promise<string | undefined>;
    error: boolean;
}


export const useCreateEmploee = (): IUseCreateEmploee => {
    const [error, setError] = useState<boolean>(false);

    async function create(emploee: IEmploee): Promise<string | undefined> {
        try {
            const apiInstace = AuthController.getInstance();
            const {data} = await apiInstace.cretateEmploee({...emploee, dateBirthday: new Date(emploee.dateBirthday).toISOString()});
            const linkId = data.data;
            return linkId;
        } catch (err:any) {
            setError(true);
            setTimeout(() => setError(false), 400)
        }
    };

    return {create, error};
}