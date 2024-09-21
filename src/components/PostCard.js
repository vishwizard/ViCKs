import Card from './Card'
import Avatar from './Avatar'
import { LocaleRouteNormalizer } from 'next/dist/server/future/normalizers/locale-route-normalizer'
export default function PostCard() {
  return (
    <Card>
          <div className="flex gap-3">
            <Avatar></Avatar>
            <div>
              <p><a className="font-semibold">Vishal Dey</a> shared a <a className="text-socialBlue font-semibold">Post</a></p>
              <div><p>2 hours ago</p></div>
              
            </div>
          </div>
          <div></div>
        </Card>
  )
}
