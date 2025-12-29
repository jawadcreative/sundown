// @ts-ignore
const PageTop = ({title}) => {
  return (
    <div className="flex gap-x-2 items-center">
        <div className="h-2 w-2 bg-[#FE390E] rounded-full"></div>
        <h1 className="uppercase font-regular font-extrabold">{title}</h1>
      </div>
  )
}

export default PageTop