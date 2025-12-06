
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
    component: React.ReactNode;
    code: string;
    title?: string;
    className?: string;
    description?: string;
}

export function ComponentPreview({
    component,
    code,
    title,
    className,
    description,
}: ComponentPreviewProps) {
    return (
        <div className={cn("group relative my-4 flex flex-col space-y-2", className)}>
            {title && <h3 className="font-heading text-lg font-bold">{title}</h3>}
            {description && <p className="text-muted-foreground text-sm">{description}</p>}

            <Tabs defaultValue="preview" className="relative mr-auto w-full">
                <div className="flex items-center justify-between pb-3">
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                        <TabsTrigger
                            value="preview"
                            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Preview
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Code
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="preview" className="relative rounded-md border p-4 sm:p-10 min-h-[350px] flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <div className="preview flex min-h-[350px] w-full items-center justify-center p-10">
                        {component}
                    </div>
                </TabsContent>

                <TabsContent value="code">
                    <div className="relative rounded-md border text-sm font-mono bg-zinc-950 dark:bg-zinc-900 border-zinc-800 p-4 overflow-x-auto">
                        <pre className="text-white"><code>{code}</code></pre>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
