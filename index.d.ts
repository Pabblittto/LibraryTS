export declare let sayHello: () => void;
export declare let addNumbers: (a: number, b: number) => number;
export interface ConstantInterface {
    property: number;
}
declare type NotExportedType = {
    x: string;
};
export declare let something: NotExportedType;
export declare let constant: ConstantInterface;
export {};
