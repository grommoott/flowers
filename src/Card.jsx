export default function Card({
    name = "Цветок",
    format = "jpg",
    description,
    onClick,
    selectedId,
    id
}) {
    return (
                <button
                    className="size-60 ease-in-out duration-100 group overflow-hidden relative rounded-xl m-4 shadow-md hover:shadow-xl"
                    onClick={() => onClick(name, format, description)}
                >
                    <img
                        src={`/${name}.${format}`}
                        className="size-60 object-cover scale-100 group-hover:scale-110 duration-100 ease-in-out"
                    />
                    <div className="top-0 absolute size-60 bg-black opacity-0 group-hover:opacity-20 ease-in-out duration-100 group-active:opacity-30"></div>
                    <div className="bg-gray-950 opacity-60 w-60 h-0 group-hover:h-20 group-hover:-translate-y-20 ease-in-out duration-100"></div>
                    <div className="content-around top-60 absolute h-20 w-60 group-hover:-translate-y-20 ease-in-out duration-100 text-white">
                        <p className="size-0"></p>
                        <p className="opacity-100 text-gray-50 text-2xl text-center">
                            {name}
                        </p>
                        <p className="size-3"></p>
                    </div>
                </button>
    )
}
