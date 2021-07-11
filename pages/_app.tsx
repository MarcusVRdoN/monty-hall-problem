import GoogleTagManager from '../components/GoogleTagManager'

import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/game.scss'
import '@/styles/card.scss'
import '@/styles/door.scss'
import '@/styles/gift.scss'
import '@/styles/input-number.scss'

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <Component {...pageProps} />
    </GoogleTagManager>
  )
}

export default MyApp