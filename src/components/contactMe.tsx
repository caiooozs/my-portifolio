'use client'

import {  
    useFormField,
    Form,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormField,} from "@/components/ui/form"
import { Button } from "./ui/button"
import { Card, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { RiH1 } from "react-icons/ri"
import { useForm } from "react-hook-form"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { register } from "module"
import { Textarea } from "./ui/textarea"


export const ContactMe = () =>{

    const form = useForm()

    const formSchema = z.object({
        username:
            z.string()
            .min(3,"Put a valueble name."),

        email:
            z.string()
            .email("Put a valuable email."),

        mensage:
            z.string()
            .min(15)
            
    })


    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })




    
    return(
        <>
            <div id="contact" className="flex justify-center">
                <div id="skills" className="flex justify-center text-4xl text-[#fff] font-sans font-bold p-12"><h1>Contact Me</h1></div>
            </div>

            <div className="p-6">
                <form>
                    <Card className="w-2/4 bg-transparent p-12 mx-auto text-[#fff] ">
                        <Form {...form}>
                            <FormField
                                control={form.control}
                                name="username"
                                render={(field) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input
                                        {...register("username")}
                                        placeholder="Your Name"></Input>
                                    </FormControl>
                                    <FormDescription />
                                    <FormMessage />
                                </FormItem>
                                )}
                            />

                            <FormField
                            control={form.control}
                            name="email"
                            render={(field) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Input 
                                    placeholder="Your email"></Input>
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                            <FormField
                            control={form.control}
                            name="mensage"
                            render={(field) => (
                            <FormItem>
                                <FormLabel />
                                <FormControl>
                                    <Textarea 
                                    className="h-64"
                                    placeholder="Your mensage"></Textarea>
                                </FormControl>
                                <FormDescription />
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        </Form>

                        
                <div className="flex justify-end">
                    <Button className="text-lg w-1/4 bg-[#D5491D]">Send</Button>
                </div>
                    </Card>
                        </form>
                    
            </div>
        
        </>
    )
}