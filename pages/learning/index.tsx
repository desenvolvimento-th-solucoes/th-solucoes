import MainLayout from "@/layouts/App";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { videos } from "../../src/data/videos";
import Link from "next/link";
import { useRouter } from "next/router";
import { Drumstick, Globe, Hospital, Scissors, ShoppingBag, Wheat } from "lucide-react";

const Index = () => {
    const router = useRouter();

    return (
        <MainLayout typeOfButtonInteraction={1}>
            <div className="px-4 lg:px-[115px] mx-auto pt-[120px] min-h-screen">
                <h1 className="text-md font-bold md:text-xl lg:text-3xl flex items-center">Treinamentos TH Sistemas<span className="text-[14px] md:text-[20px] text-gray-500 ml-2">(vídeos)</span></h1>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
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
                                    <article className="flex items-center pb-2 justify-between gap-2 border-b border-b-gray-200">
                                        <h2 className="text-xs lg:text-[16px]">{video.label}</h2>
                                        <Link onClick={() => router.push("/learning")} href={`/api/download?filepath=${encodeURIComponent(video.url)}`} className="py-2 px-4 rounded-sm border-2 border-default-blue text-default-blue">Download</Link>
                                    </article>
                                )
                            })}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <span className="text-gray-500 text-center w-full flex items-center justify-center mt-12">Novos Treinamentos em Breve...</span>
            </div>
        </MainLayout>
    )
}

export default Index;