"use client"
import { Button } from '@/components/ui/button';
import {EditorContent, useEditor, type Editor} from '@tiptap/react'
import Starterkit from '@tiptap/starter-kit'

export const Menubar = ({editor}:{editor:Editor | null})=>{
   
    if(!editor){
        return null;
    }

    return (
        <div className='flex flex-wrap gap-5'>
            <Button type="button" onClick={()=> editor.chain().focus().toggleHeading({level:1}).run()}>
                H1
            </Button>

        </div>
    )
}

export function TipTapEditor(){

    const editor = useEditor({
        extensions:[Starterkit],
        content:'<p>Hello World</p>',
        immediatelyRender: false,
        editorProps:{
            attributes:{
                class:"prose"
            }
        }
    })
    return (
        <div>
            <Menubar editor={editor}/>
            <EditorContent className='rounded-lg border p-2 min-h-[150px] mt-3' editor={editor}/>
        </div>
    )
}