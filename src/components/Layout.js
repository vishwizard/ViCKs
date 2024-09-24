import Navigation from "@/components/Navigation";

export default function Layout({children}) {
  return (
    <div>
        <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-1/4">
        <Navigation></Navigation>
      </div>
      <div className="w-3/4">
        {children}
      </div>
    </div>
    </div>
  )
}
