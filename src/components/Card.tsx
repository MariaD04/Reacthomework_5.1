import { PropsWithChildren } from "react"

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className="card">
        { children }
    </div>
  )
}

export default Card