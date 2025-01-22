import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const commonTabStyles =
  "relative py-2 px-4 text-sm font-medium transition-all rounded-none data-[state=active]:text-blue-600 bg-secondary shadow-none before:content-[''] before:absolute before:bottom-[-1px] before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-0.5 before:bg-blue-500 data-[state=active]:before:block before:hidden";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="flex-1">
      <TabsList className="inline-flex h-9 items-center justify-start w-auto bg-secondary border-b">
        <TabsTrigger value="account" className={commonTabStyles}>
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className={commonTabStyles}>
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <h1>Account</h1>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <h1>Password</h1>
      </TabsContent>
    </Tabs>
  );
}
