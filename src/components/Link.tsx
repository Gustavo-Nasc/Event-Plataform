import { CaretRight, FileArrowDown, Image } from "phosphor-react"

interface LinkProps {
    variant: 'primary' | 'secondary'
}

export function Link(props: LinkProps) {
    const buttonVariant = props.variant

    if (buttonVariant == 'primary') {
        return (
            <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                    <FileArrowDown size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">
                        Material Complementar
                    </strong>
                    <p className="text-sm text-gray-200 mt-2">
                        Acesse o material complementar para acelerar o seu desenvolvimento
                    </p>
                </div>
                <div className="h-full p-6 flex items-center">
                    <CaretRight />
                </div>
            </a>
        )
    } else {
        return (
            <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                <div className="bg-green-700 h-full p-6 flex items-center">
                    <Image size={40} />
                </div>
                <div className="py-6 leading-relaxed">
                    <strong className="text-2xl">
                        Wallpapers exclusivos
                    </strong>
                    <p className="text-sm text-gray-200 mt-2">
                        Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
                    </p>
                </div>
                <div className="h-full p-6 flex items-center">
                    <CaretRight />
                </div>
            </a>
        )
    }
}