"use client"

import { Textarea } from "@/components/ui/textarea"
import { SaveButton } from "./SubmitButtons"
import { updateDescription } from "../actions"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "sonner"

interface iAppProps{
    subName:string,
    description:string | null | undefined
}

const initialState = {
    message:"",
    status:""
}
function SubDescriptionForm({description,subName}:iAppProps) {

    const [state,formAction] = useFormState(updateDescription,initialState)

    useEffect(()=>{
        if(state.status === "green"){
            console.log("description created")
            toast.success(state.message)
        }
        else if(state.status === "error"){
            console.log("description not created")
            toast.error(state.message)
        }

    },[state,toast])
    return (
        <>

            <form className="mt-3" action={formAction}>
                <input type="hidden" name="subName" value={subName}/>
                <Textarea placeholder="Create your custom description" maxLength={100} name="description"
                defaultValue={description ?? undefined}>

                </Textarea>
                <SaveButton/>
            </form>
        </>
    )
}

export default SubDescriptionForm