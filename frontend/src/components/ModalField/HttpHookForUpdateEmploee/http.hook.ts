import { useState } from "react"
import { IEmploee } from "../../ModalItems/ModalItems";
import { EmploeeController } from "../../../http/controllers/EmploeeController/emploee.controller";
import { IUser } from "../../../../types/index.types";
import { setLoading } from "../../../store/LoadingStore/loading.store";

interface IUseUdpateEmploee{
    error: boolean;
    update: (pyaload: IEmploee) => Promise<IUser | undefined>;
}

export const useUpdateEmploee = (): IUseUdpateEmploee => {
    const [error, setError] = useState<boolean>(false);

    function showError(): void{
        setError(true);
        setTimeout(() => setError(false), 400);
    };

    function validate(payload: IEmploee): boolean{
        return Object.values(payload).length >= 5;
    }

    async function update(payload: IEmploee): Promise<IUser | undefined>{
        try{
            if(!validate(payload)) {
                showError();
                return;
            }
            setLoading(true)
            const apiInstance = EmploeeController.getInstance();
            const {data} = await apiInstance.updateEmploee(payload);
            setLoading(false)
            return data.data;
        }catch(err){
            setLoading(false)
            console.log(err)
            showError();
        }
    };

    return {error, update};
}