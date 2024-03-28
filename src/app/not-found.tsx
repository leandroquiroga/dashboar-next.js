
import { PageNotFound, Sidebar } from "@/components";

export default function NotFound() {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <PageNotFound />
      </div>
    </div>
  );
}