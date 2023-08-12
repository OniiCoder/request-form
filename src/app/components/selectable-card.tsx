import Image from 'next/image';

export default function SelectableCard({title, description, selected = false, onClick }: {title:string, description:string, selected?:boolean, onClick?:() => void}) {

    const className = `flex flex-col gap-1 text-sm border-2 rounded-lg p-4 text-start ${selected ? 'border-black' : 'border-lightGray'}`

    return (
        <button className={className} onClick={onClick}>
            <div className="w-full flex items-center justify-between font-medium">{title}
            <div className={selected ? 'h-[16px] w-[16px] bg-black flex justify-center items-center rounded-full' : ''}>
                         <Image src="/svg/check.svg" alt="check" width={10} height={7} />
                 </div>
            </div>
            <span className="text-grayColor">{description}</span>
        </button>
    )
}