import { FC } from 'react'

type SubAppContainerProps = {}

const SubAppContainer: FC<SubAppContainerProps> = () => {
  // const microAppContainerRef = useRef<HTMLDivElement>(null)
  // let microApp: any = null

  // useEffect(() => {
  //   const load =  () => {
  //     if(microAppContainerRef.current) {
  //       microApp = loadMicroApp({
  //         name: 'vue-app-sub',
  //         entry: '//localhost:7100',

  //         container: microAppContainerRef.current,
  //       })
  //     }
  //   }

  //   load()

  //   return () => {
  //     // if(microApp) {
  //       microApp.unmount()
  //     // }
  //   }
  // }, [])

  return (
    <>
      <div
        // ref={microAppContainerRef}
        id="sub-app-container"
        style={{ height: '100vh', width: '100%', border: '1px solid #ddd' }}
      >
      </div>
    </>
  )
}

export default SubAppContainer