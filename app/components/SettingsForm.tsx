"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { updateUserName } from "../actions"
import { SubmitButton } from "./SubmitButtons"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "sonner"

const initialState = {
    message:"",
    status:""
}
export  function SettingsForm({username}:{username:string | null | undefined}){
    const [state ,formAction] = useFormState(updateUserName,initialState)
    useEffect(() => {
        if(state?.status === "green"){
            toast("success",{
                description:state.message
            });
        }

        else if(state?.status === "error"){
             toast("Error",{
                description:state.message,
        
            });
        }
    },[state,toast])
    return (
        <form action={formAction}>
            <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
            <Separator className="my-4 "/>

            <Label className="text-lg">Username</Label>
            <p className="text-muted-foreground">In this settings page you can change your username</p>
            <Input defaultValue={username ?? undefined} name="username" required className="mt-2" min={2} maxLength={15}/>
            {state?.status === "error" && (<p className="text-red-500 mt-1">{state.message}</p>)}

            <div className="w-full flex mt-5 gap-x-5 justify-end">
                <Button variant="secondary" asChild type="button"><Link href="/">Cancel</Link></Button>
                 <SubmitButton/>
            </div>
        </form>
    )
}