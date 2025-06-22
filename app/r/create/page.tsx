import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SubredditPage(){
    return(
        <div className="max-w-[1000px] mx-auto flex flex-col mt-4">
            <form>
                <h1 className="text-3xl font-extrabold tracking-tight">Create Community</h1>
                <Separator className="my-4 "/>
                <Label className="text-lg">Name</Label>
                <p className="text-muted-foreground">Community names including capitalization cannot be changed</p>

                <div className="relative mt-3">
                    <p className="absolute left-2 w-8 items-center justify-center h-full text-muted-foreground">r/</p>
                    <Input name="name" required className="pl-6" minLength={2} maxLength={21}/>

                </div>

                <div className="w-full flex mt-5 gap-x-5 justify-end">
                    <Button variant="secondary" asChild><Link href="/">Cancel</Link></Button>
                     <Button>Submit</Button>
                </div>
            </form>

        </div>
    
)
}