export default function Title({title, description} : {title:string, description:string}) {
    return (
        <div>
            <div className="flex flex-col">
                <span className="text-lg font-bold">{title}</span>
                <span className="text-sm text-grayColor">{description}</span>
            </div>
        </div>
    )
}