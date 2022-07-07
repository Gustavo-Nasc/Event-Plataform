import { DefaultUi, Player, Youtube } from "@vime/react";
import { Button } from "./Button";
import { Link } from './Link';
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css'

const GET_LESSON_BY_SLUG_QUERY = gql`
    query GetLessonBySlug ($slug: String) {
        lesson(where: {slug: $slug}) {
            title
            videoId
            description
            teacher {
                avatarURL
                bio
                name
            }
        }
    }
`

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;
        }
    }
}

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug
        }
    })

    if (!data) {
        <div className="flex-1">
            <p>Carregando...</p>
        </div>
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data?.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-center gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data?.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data?.lesson.description}
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img
                                src={data?.lesson.teacher.avatarURL}
                                alt="Imagem do professor"
                                className="w-16 h-16 rounded-full border-2 border-blue-500"
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data?.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm block">{data?.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Button variant="primary" />
                        <Button variant="secondary" />
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-2">
                    <Link variant="primary" />
                    <Link variant="secondary" />
                </div>
            </div>
        </div>
    )
}