
export type IStatus = 'Dismissed' | 'Hired'

export namespace ResultEmploeeUseCase {
    export class IResultDeletId {
        public message: string;
    };

    export class IStatisticResult {
        id: number;
        type: 'Dismissed' | 'Hired';
        mounth: number;
        year: number;
    }
}