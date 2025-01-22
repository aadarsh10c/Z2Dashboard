import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const commonTabStyles =
  "relative text-xs py-2 px-4 text-sm font-medium transition-all rounded-none data-[state=active]:text-blue-600 bg-secondary shadow-none before:content-[''] before:absolute before:bottom-[-1px] before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-blue-500 data-[state=active]:before:block before:hidden";

export default function MyDataTab() {
  return (
    <Tabs defaultValue="allFloders" className="flex-1">
      <TabsList className="inline-flex h-9 items-center justify-start w-auto bg-secondary border-b">
        <TabsTrigger value="allFolders" className={commonTabStyles}>
          All Folders
        </TabsTrigger>
        <TabsTrigger value="myFolders" className={commonTabStyles}>
          My Folders
        </TabsTrigger>
        <TabsTrigger value="favorites" className={commonTabStyles}>
          Favorites
        </TabsTrigger>
      </TabsList>
      <TabsContent value="allFolders" className="p-4">
        <h1>All Folders</h1>
      </TabsContent>
      <TabsContent value="myFolders" className="p-4">
        <h1>My Folders</h1>
      </TabsContent>
      <TabsContent value="favorites" className="p-4">
        <h1>Favorites</h1>
      </TabsContent>
    </Tabs>
  );
}
