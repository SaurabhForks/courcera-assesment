// import { clientonlyCode } from "@/utils/client-only";
import { serverOnlyCode } from "@/utils/server-only";

export default function DashHome() {
  serverOnlyCode();
  return <div>DashHome</div>;
}
