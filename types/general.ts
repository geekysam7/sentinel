import { NODES } from "@/constants/general";

type ValueOf<T> = T[keyof T];

type TNodes = ValueOf<typeof NODES>;

export type { TNodes, ValueOf };
