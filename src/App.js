import React, {useEffect} from 'react'
import './App.css'
import TypeHeader from './components/TypeHeader'
import CountryMap from './components/CountryMap'
import ScrollOut from 'scroll-out'
import Letter from './components/Letter'
function App() {
  const Vancouver = {
    lat: 49.2027,
    lng: -122.9007,
  }
  const Osaka = {
    lat: 34.7112,
    lng: 135.5023,
  }

  const USA = {
    lat: 33.9780342,
    lng: -118.1436849,
  }

  const VancouverMakers = [
    {
      id: 1,
      title: 'Our First Dating',
      description: 'Playing Game in Rec Room',
      photo: 'images/canada/first.png',
      date: '2023-01-02',
      lat: 49.26726,
      lng: -123.00216,
      url: 'https://maps.app.goo.gl/XAUZmTi4zGaRQGpM9?g_st=ic',
    },
    {
      id: 2,
      title: 'Cat Cafe',
      description: 'Misa is like Cat',
      photo: 'images/canada/catcafe.png',
      date: '2023-02-20',
      lat: 49.27985,
      lng: -123.1073,
      url: 'https://maps.app.goo.gl/yWDrD3XptgQ3mLgy6?g_st=ic',
    },
    {
      id: 3,
      title: 'Grouse Moutain',
      description: 'Go snowboarding with Misa',
      photo: 'images/canada/snowboarding.png',
      date: '2023-03-26',
      lat: 49.38001,
      lng: -123.08113,
      url: 'https://maps.app.goo.gl/NTHdoGqPqrn4csS66?g_st=ic',
    },
    {
      id: 4,
      title: 'Vancouver Aquarium',
      description: 'See fish firend',
      photo: 'images/canada/acquarium.png',
      date: '2023-04-08',
      lat: 49.30048,
      lng: -123.13133,
      url: 'https://maps.app.goo.gl/xwrMreGxdb85tysS7?g_st=ic',
    },
    {
      id: 5,
      title: 'VanDusen Botanical Garden',
      description: 'Go VanDusen Garden with Misa',
      photo: 'images/canada/vandunsen.png',
      date: '2023-04-22',
      lat: 49.24076,
      lng: -123.13279,
      url: 'https://maps.app.goo.gl/NTvfgag4BuLK78Zd9?g_st=ic',
    },
    {
      id: 6,
      title: 'Grandvile Island',
      description: 'After lunch go Granvile Island',
      photo: 'images/canada/canadaplace.png',
      date: '2023-04-29',
      lat: 49.2711937,
      lng: -123.1340106,
      url: 'https://maps.app.goo.gl/h3Q8uQtfSAKvSAMX9?g_st=ic',
    },
    {
      id: 7,
      title: 'English Bay',
      description: 'Go English Bay for Chilling',
      photo: 'images/canada/englishbay.png',
      date: '2023-04-29',
      lat: 49.2880573,
      lng: -123.142826,
      url: 'https://maps.app.goo.gl/4Q7BwntheLuH5XEB9?g_st=ic',
    },
    {
      id: 8,
      title: 'Watch Movie',
      description: 'Watch Mario with Misa',
      photo: 'images/canada/movie.png',
      date: '2023-05-24',
      lat: 49.280843,
      lng: -123.1073773,
      url: 'https://maps.app.goo.gl/VVAkCu2a19uTd8jKA?g_st=ic',
    },
    {
      id: 9,
      title: 'Hoon Birthday',
      description: 'Hoon Birthday in Guu Davie',
      photo: 'images/canada/hoonbirthday.png',
      date: '2023-06-23',
      lat: 49.2822246,
      lng: -123.1338074,
      url: 'https://maps.app.goo.gl/ju1GRSWg1C8ThWnc9?g_st=ic',
    },
    // {
    //   id: 10,
    //   title: 'Victoria Island',
    //   description: 'Victoria Island one day trip',
    //   photo: '/images/canada/victoria.png',
    //   date: '2022-07-03',
    //   lat: 48.42026,
    //   lng: -123.36997,
    //   url: 'https://maps.app.goo.gl/vRPi97jTdzAZJrrs7?g_st=ic',
    // },
    {
      id: 11,
      title: 'Richmond Night market',
      description: 'Richmond Night market',
      photo: 'images/canada/nightmarket.png',
      date: '2023-07-30',
      lat: 49.1931605,
      lng: -123.1326058,
      url: 'https://maps.app.goo.gl/xV3cNpkVctS9SbzS8?g_st=ic',
    },
    {
      id: 12,
      title: 'Soccer Game',
      description: 'Watch Soccer game with White Cap and Mexico',
      photo: 'images/canada/soccer.png',
      date: '2023-08-05',
      lat: 49.2767217,
      lng: -123.1120463,
      url: 'https://maps.app.goo.gl/k1ffeoJanDZBxbtM8?g_st=ic',
    },
    {
      id: 13,
      title: 'Misa Birthday',
      description: 'Misa Birthday before one day in Davie Guu',
      photo: 'images/canada/misabirthday.png',
      date: '2023-08-11',
      lat: 49.2822246,
      lng: -123.1348074,
      url: 'https://maps.app.goo.gl/ju1GRSWg1C8ThWnc9?g_st=ic',
    },
    {
      id: 14,
      title: 'Stanley Park',
      description: 'Take Scooter with Misa in Stanley Park',
      photo: 'images/canada/stanely.png',
      date: '2023-09-02',
      lat: 49.29406,
      lng: -123.13828,
      url: 'https://maps.app.goo.gl/zaky73bXR3Hhkbi56?g_st=ic',
    },
    {
      id: 15,
      title: 'Make Couple ring',
      description: 'Make Couple ring in Langley',
      photo: 'images/canada/couplering.png',
      date: '2023-09-10',
      lat: 49.1659349,
      lng: -122.6383689,
      url: 'https://blog.naver.com/lucianme',
    },
  ]

  const OsakaMakers = [
    {
      id: 1,
      title: 'First Day in Osaka',
      description: 'First Day in Osaka',
      photo: 'images/japan/first.png',
      lat: 34.71958,
      lng: 135.48026,
      date: '2023-11-30',
      url: 'https://maps.app.goo.gl/ak2NkdwyNs3Pq8dF6?g_st=ic',
    },
    {
      id: 2,
      title: 'Dotonbori',
      description: 'Dotonbori with Misa',
      photo: 'images/japan/dotonbori.png',
      lat: 34.66874,
      lng: 135.50308,
      date: '2023-12-01',
      url: 'https://maps.app.goo.gl/9ud1GgAemwDeXrgF9?g_st=ic',
    },
    {
      id: 3,
      title: 'Osaka Castle',
      description: 'Osaka Castle with Misa and Taka',
      photo: 'images/japan/osakacastle.png',
      lat: 34.68931,
      lng: 135.52681,
      date: '2023-12-03',
      url: 'https://maps.app.goo.gl/T86hLiQ5GBmTj7Vt8?g_st=ic',
    },
    {
      id: 4,
      title: 'Universial Studio',
      description: 'Universial Studio in Osaka',
      photo: 'images/japan/univerisal.png',
      lat: 34.66756,
      lng: 135.43141,
      date: '2023-12-04',
      url: 'https://maps.app.goo.gl/V1nEDJpis6P2cC1i9?g_st=ic',
    },
    {
      id: 5,
      title: 'Kobe Mosaic',
      description: 'Kobe Mosaic with tower',
      photo: 'images/japan/kobe.png',
      lat: 34.67992,
      lng: 135.18471,
      date: '2023-12-06',
      url: 'https://maps.app.goo.gl/dJZQqHdWbeHY1wGF9?g_st=ic',
    },
    {
      id: 6,
      title: 'Arima Onsen',
      description: 'Arima Onsen wearing Ukata',
      photo: 'images/japan/arima.png',
      lat: 34.7947263,
      lng: 135.2494002,
      date: '2023-12-07',
      url: 'https://maps.app.goo.gl/G3C8pcg4Xxqjg2Ck6?g_st=ic',
    },
    {
      id: 7,
      title: 'KinKakukjincho',
      description: 'Gold KinKakujincho',
      photo: 'images/japan/kinkajin.png',
      lat: 35.03892,
      lng: 135.72868,
      date: '2023-12-09',
      url: 'https://maps.app.goo.gl/xmz2NXPrbA47dzVGA?g_st=ic',
    },
    {
      id: 8,
      title: 'Kobe Arashiyama',
      description: 'Kobe Arashiyama Bamboo forest',
      photo: 'images/japan/arashiyama.png',
      lat: 35.01826,
      lng: 135.67422,
      date: '2023-12-09',
      url: 'https://maps.app.goo.gl/wxaockBXbsKZdCTY8?g_st=ic',
    },
    {
      id: 9,
      title: 'Tōji wearing Kimono',
      description: 'Go Tōji wearing Kimono',
      photo: 'images/japan/toji.png',
      lat: 34.98014,
      lng: 135.7484,
      date: '2023-12-10',
      url: 'https://maps.app.goo.gl/KpaKqjaK8nBiavqf7?g_st=ic',
    },
    {
      id: 10,
      title: 'Cup Noodle museum',
      description: 'Cute Ahiru like you',
      photo: 'images/japan/ramen.png',
      lat: 34.81813,
      lng: 135.42679,
      date: '2023-12-15',
      url: 'https://maps.app.goo.gl/rX8s9HHgjsv4W3u28?g_st=ic',
    },
    {
      id: 11,
      title: 'Itami Airport',
      description: 'We will meet soon Misa',
      photo: 'images/japan/end.png',
      lat: 34.79013,
      lng: 135.44224,
      date: '2023-12-16',
      url: 'https://maps.app.goo.gl/zFSStfxLeifKR9jB8?g_st=ic',
    },
  ]

  const USAMarkers = [
    {
      id: 1,
      title: 'La Brea Ramen & Sushi',
      description: 'Eat Ramen in LA La Brea Ramen & Sushi',
      photo: 'images/usa/ramen.png',
      date: '2023-05-29',
      lat: 34.06216,
      lng: -118.3638,
      url: 'https://maps.app.goo.gl/jA8pmxMuM7rnfqR66?g_st=ic',
    },
    {
      id: 2,
      title: 'République Café Bakery',
      description: 'République Café Bakery',
      photo: 'images/usa/cafe.png',
      date: '2023-05-29',
      lat: 34.06417,
      lng: -118.34385,
      url: 'https://maps.app.goo.gl/FD43yTBiLqEbjzdc8?g_st=ic',
    },
    {
      id: 3,
      title: 'Hollywood Blvd',
      description: 'Take photo with Misa in Hollywood Blvd',
      photo: 'images/usa/hollywood.png',
      date: '2023-05-29',
      lat: 34.1014662,
      lng: -118.340257,
      url: 'https://maps.app.goo.gl/ag2uHG5rFpp5XvtQ9?g_st=ic',
    },
    {
      id: 4,
      title: 'HollyWood Sign',
      description: 'See HollyWood sign in Lake Park',
      photo: 'images/usa/sign.png',
      date: '2023-05-29',
      lat: 34.12591,
      lng: -118.326,
      url: 'https://maps.app.goo.gl/j2gzSh1k9F8kCKw6A?g_st=ic',
    },
    {
      id: 5,
      title: 'Santa Monica Pier',
      description: 'Go Santa Monica Pier beach',
      photo: 'images/usa/beach.png',
      date: '2023-05-29',
      lat: 34.00939,
      lng: -118.49731,
      url: 'https://maps.app.goo.gl/j8yXrWaB4pvyCsUA8?g_st=ic',
    },
    {
      id: 6,
      title: 'Universial Studio Hollywood',
      description: 'Go Universial Studio Hollywood',
      photo: 'images/usa/universial.png',
      date: '2023-05-30',
      lat: 34.1381435,
      lng: -118.3533867,
      url: 'https://maps.app.goo.gl/uqH3iBzWcVyY9z8o8?g_st=ic',
    },
  ]

  useEffect(() => {
    const scrollOutInstance = ScrollOut({threshold: 0.5})
    return () => {
      scrollOutInstance.teardown()
    }
  }, [])
  return (
    <div className='App'>
      <TypeHeader />
      <div className='Content-box'>
        <Letter
          title='バンクーバーでの縁'
          content={
            '最初は可愛いだけの弟が、ずっと目が行って助けの手も行った 国ではなく好きな人としてもう少し知って行きたかった。\n 彼女の気持ちは分からないが、夕食を二人きりで食べた後、私が彼女のことが大好きだということに気づいた。\n 彼女に与えられた時間は限られているが、縁はまた会えることを信じて、下手でよく分からない日本語だったが、\n 確かな意味が分かるので勇気を持って話した。 そうして私たちは友達より近い間柄になった。\n カナダは私たちをつないでくれたとてもありがたい第一歩だ。\n'
          }
        />
        <div className='Country-Box'>
          <CountryMap
            center={Vancouver}
            name='Vancouver'
            markers={VancouverMakers}
            zoom={11}
          />
        </div>
        <Letter
          content={
            '人生でアメリカに一度は必ず行ってみたかった。そこをミサと一緒に行ってきてとても楽しかった経験だった。\nユニバーサルスタジオも行ってビーチも一緒に行って短い休暇だったけどミサと一緒にできてとても良い経験だった。\n次ももっと面白い他の国へ旅行に行こう'
          }
          title='私たちの初めての海外旅行、アメリカ'
        />

        <div className='Country-Box'>
          <CountryMap center={USA} name='USA' markers={USAMarkers} zoom={10} />
        </div>

        <Letter
          content={
            '美紗に会いたくて飛行機に乗って飛んだ。美紗を見る前から涙がどれだけ出たのか、皆が予想したのか\nお互いを見るやいなや泣いた。今も実は涙が少し出るね。美紗のことを思うと、なぜか涙がよく出る。\n多分とてもありがたい気持ちと申し訳ない気持ちが共存するだろう。日本旅行を通じて美紗の環境と考え、友達、\n好きな食べ物を一緒に共有できてとても幸せだった。短い2週間だったけど、とても幸せだった。\n美紗についてたくさん知っているけど、私は美紗についてもっと知りたい、また一緒に日本旅行に行こう。\n'
          }
          title='美紗についてたくさん学んだ日本旅行'
        />

        <div className='Country-Box'>
          <CountryMap
            center={Osaka}
            name='Osaka'
            markers={OsakaMakers}
            zoom={10}
          />
        </div>
        <Letter
          content={
            '考えただけでもチューしたいかわいい美紗、私が時には美紗の気持ちを理解できなかった瞬間がたくさんあったと思います。今考えると本当にごめんなさい。その当時はなぜそうできなかったのかという後悔もあり、私たちの母国語ではなく英語で会話して誤解もあり争いもありましたが、いつのようにまたお互いのお尻に触れています。これからも私たちが考えられなかった部分で意見が違うかもしれませんが、一緒にたくさん話し合い、お互いを待ってあげよう、美紗が私の初めての人で本当に良かったです、美紗を通じて多くのことを学び感じることができたと思います。 いつもありがとう、ごめんと言ってくれてありがとう、私には懐疑的な部分でしたが、美紗を見ながらたくさん学んでいます。 これからも大変な状況と問題に直面しても一緒に乗り越えていこう。また会えるまで待ってくれてありがとう。私が心からたくさん愛しています。\nもう1年ですが、10年、100年幸せにしてあげる。愛してます 사랑해 \n\n'
          }
          title='美紗は私の最後の女'
        />
      </div>
    </div>
  )
}

export default App
