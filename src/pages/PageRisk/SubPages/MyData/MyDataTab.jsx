import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MyDataTable } from "./MyDataTable";
import { columns } from "./MyDataTableColumns";
import MyDataTableData from "@/lib/MyDataTable.json";

// Tab configuration data
const tabsConfig = [
  { id: "allFolders", label: "All Folders", component: MyDataTable },
  { id: "myFolders", label: "My Folders" },
  { id: "favorites", label: "Favorites" },
];

// Common tab styles extracted
const commonTabStyles =
  "relative text-xs py-2 px-4 font-medium transition-all rounded-none " +
  "data-[state=active]:text-blue-600 bg-secondary shadow-none " +
  "before:content-[''] before:absolute before:bottom-[-1px] " +
  "before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 " +
  "before:bg-blue-500 data-[state=active]:before:block before:hidden";

export default function MyDataTab() {
  return (
    <section className="h-full flex-1 flex flex-col">
      <Tabs defaultValue="allFolders" className="h-full flex flex-col">
        <header className="flex-none sticky top-0 bg-white z-10">
          <nav>
            <TabsList className="inline-flex h-9 items-center justify-start w-auto bg-secondary border-b">
              {tabsConfig.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={commonTabStyles}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </nav>
          <Separator />
        </header>

        <main className="flex-1">
          {tabsConfig.map((tab) => (
            <TabsContent
              key={tab.id}
              value={tab.id}
              className={
                tab.id === "allFolders" ? "h-full" : "min-h-screen p-4"
              }
            >
              {tab.id === "allFolders" ? (
                <MyDataTable
                  columns={columns}
                  data={MyDataTableData}
                  className="h-full"
                />
              ) : (
                <div className="h-full">
                  <h1>{tab.label}</h1>
                </div>
              )}
            </TabsContent>
          ))}
        </main>
      </Tabs>
    </section>
  );
}
