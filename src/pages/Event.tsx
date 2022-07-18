import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug
                    ?
                    <Video lessonSlug={slug} />
                    :
                    <div className="flex-1 pt-8">
                        <p className="text-2xl text-center font-bold">Selecione uma aula</p>
                    </div>
                }
                <Sidebar />
            </main>
        </div>
    )
}