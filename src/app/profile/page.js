import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/Layout";

export default function profile() {
  return (
    <div>
        <Layout>
        <div className="relative ">
          <Card nopadding={true}>
          <div className="flex justify-center rounded-md h-36 overflow-hidden items-start">
            <img src={'/2.jpg'}/>
            </div>
            <div className="absolute top-24 left-5">
            <Avatar size={'big'}></Avatar>
            </div>
            <div className="p-4 pb-40 ml-40">
              <div className="font-bold text-3xl">
              Vishal Dey
              </div>
              <div>
                Haridwar, Uttarakhand
              </div>
            </div>
           
          </Card>
          </div>
        </Layout>
    </div>
  )
}
