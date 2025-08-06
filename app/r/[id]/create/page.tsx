"use client"
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import pfp from '../../../../public/pfp.png'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, Video } from "lucide-react";
import { TabsContent } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TipTapEditor } from "@/app/components/TipTabEditor";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { UploadDropzone } from "@/app/components/Uploadthing";

const rules = [
    {id:1, rule:"Remember the human"},
    {id:2, rule:"Behave like yo would in real world"},
    {id:3, rule:"Look for orignal source of content"},
    {id:4, rule:"Serach for duplication before posting"},
    {id:5, rule:"Read community guide."},

]

export default async function CreatePost({params}:{params:{id:string}}){
    const param = await params
    return (
        <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">
           <div className="w-[65%] flex flex-col gap-y-5">
              <h1 className="font-bold">Subreddit:<Link className="text-primary" href={`/r/${param.id}`}> r/{param.id}</Link></h1>
              <Tabs className="w-full" defaultValue="post">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="post">
                       <Text  className="h-4 w-4 mr-2"/> Post
                    </TabsTrigger>
                    <TabsTrigger value="image">
                       <Video className="h-4 w-4 mr-2"/> Image & Video
                    </TabsTrigger>

                </TabsList>

                <TabsContent value="post">
                   <Card>
                    <form >
                        <CardHeader>
                            <Label>Title</Label>
                            <Input required name="title" placeholder="title"/>
                            <TipTapEditor/>
                        </CardHeader>
                        <CardFooter className="mt-2">
                            <SubmitButton text="Create Post"/>
                        </CardFooter>
                    </form>
                   </Card>

                </TabsContent>

                <TabsContent value="image">
                    <Card>
                        <CardHeader>
                            <UploadDropzone className="ut-upload-icon:size-40 ut-button:bg-primary  ut-button:ut-readying:bg-primary/50 ut-label:text-primary ut-button:ut-uploading:bg-primary/50 ut-button:ut-uploading:after:bg-primary" endpoint="imageUploader" onClientUploadComplete={(res)=>{console.log(res)}} onUploadError={(error:Error)=>alert('Error')}/>
                        </CardHeader>
                    </Card>

                </TabsContent>


              </Tabs>
           </div>

           <div className="w-[35%]">
               <Card className="flex flex-col p-4">
                <div className="flex items-center gap-x-2">
                    <Image className="h-10 w-10"src={pfp} alt="pfp"/>
                    <h1 className="font-medium ">Posting to reddit</h1>
                </div>
                 <Separator/>

                 <div className="flex flex-col gap-y-5 mt-5">
                    {rules.map((item)=>(
                        <div key={item.id}>
                           
                            <p className="text-sm font-medium">{item.id}. {item.rule}</p>
                            <Separator className="mt-2"/>
                        </div>
                    ))}
                 </div>
               </Card>
           </div>
        </div>
    )
}