export default interface ContractView{
    anonymous?: boolean | undefined;
    inputs?: {
        indexed?: boolean;
        internalType?: string;
        name?: string;
        type?: string;
    }[] | undefined;
    outputs?: {
        internalType?: string | undefined,
        name?: string | undefined,
        type?: string | undefined,
    }[] | undefined;
    name?: string | undefined;
    type?: string | undefined;
    stateMutability?: string | undefined;
}