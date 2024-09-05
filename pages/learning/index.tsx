import MainLayout from "@/layouts/App";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Drumstick, Globe, Hospital, Scissors, ShoppingBag, Wheat } from "lucide-react";
import { RequireAuthentication } from "@/app/components/RequireAuthentication";
import { useContext } from "react";
import { AuthenticationContext } from "@/app/context/AuthenticationContext";
import * as videos from "../../videos.json";

const Index = () => {
    const router = useRouter();
    const authenticationContext = useContext(AuthenticationContext);

    return (
        <MainLayout typeOfButtonInteraction={1}>
            <RequireAuthentication authenticationContext={authenticationContext}>
                <div className="px-4 lg:px-[115px] mx-auto pt-32 min-h-screen">
                    <h1 className="text-md font-bold md:text-xl lg:text-3xl flex items-center">Apresentações TH Sistemas</h1>
                    {videos.presentations.map((video: any) => {
                        return (
                            <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                            </Link>
                        )
                    })}
                    <h1 className="text-md font-bold md:text-xl lg:text-3xl flex items-center mt-32">Treinamentos TH Sistemas<span className="text-[14px] md:text-[20px] text-gray-500 ml-2">(vídeos)</span></h1>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <Globe />
                                    TH Web
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thweb.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <Wheat />
                                    TH Agro
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thagro.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <Drumstick />
                                    TH Food
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thfood.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <Hospital />
                                    TH Clínicas
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thclinicas.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <ShoppingBag />
                                    TH Shop
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thshop.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="text-xl">
                                <div className="flex items-center gap-2">
                                    <Scissors />
                                    TH Salões & Barbearias
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2">
                                {videos.thsaloes.map((video: any) => {
                                    return (
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="hover:underline flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                            <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                            <button className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</button>
                                        </Link>
                                    )
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <span className="text-gray-500 text-center w-full flex items-center justify-center mt-12">Novos Treinamentos em Breve...</span>
                </div>
            </RequireAuthentication>
        </MainLayout>
    )
}

export default Index;