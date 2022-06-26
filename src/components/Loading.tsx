import { CircleNotch } from "phosphor-react";

export function Loading() {
  return(
    <div className="flex-1 max-h-[60vh] flex items-center justify-center">
      <CircleNotch size={40} className="animate-spin"/>
    </div>
  );
}