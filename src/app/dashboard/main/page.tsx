import { WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'This is the admin dashboard page',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className=" mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl"> Informacion general</span>

      <div className="flex flex-wrap p-2 justify-center items-center">
        <WidgetsGrid />
      </div>
    </div>
  );
}