import type { FC, ReactNode, CSSProperties } from "react";

declare global {
  type SLComponent<P = unknown> = FC<
    P & { className?: string; style?: CSSProperties; children?: ReactNode }
  >;
}
