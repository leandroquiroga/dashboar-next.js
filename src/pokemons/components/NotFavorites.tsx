import { RiHeart2Fill } from "react-icons/ri"


export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <RiHeart2Fill size={100} className="text-red-500"/>
      <span className="text-4xl my-2">No tienes pokemones favoritos</span>
    </div>
  )
}
