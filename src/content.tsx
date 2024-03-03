// import cssText from "data-text:~style.css"
// import type {
//   PlasmoCSConfig,
//   PlasmoCSUIJSXContainer,
//   PlasmoCSUIProps,
//   PlasmoRender
// } from "plasmo"
// import type { FC } from "react"
// import { createRoot } from "react-dom/client"

// import { LinkedinAi } from "~features/linkedin-ai"

// export const config: PlasmoCSConfig = {
//   matches: ["https://*.linkedin.com/*"]
// }
// export const getStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = cssText
//   return style
// }

// export const getRootContainer = () =>
//   document.querySelector(".msg-form__msg-content-container")

// const PlasmoOverlay: FC<PlasmoCSUIProps> = () => {
//   return (
//       <LinkedinAi />
//   )
// }

// export const render: PlasmoRender<PlasmoCSUIJSXContainer> = async ({
//   createRootContainer
// }) => {
//   const rootContainer = await createRootContainer()
//   const root = createRoot(rootContainer)
//   root.render(<PlasmoOverlay />)
// }

// export default PlasmoOverlay
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchor } from "plasmo"

import { LinkedinAi } from "~features/linkedin-ai"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector(".msg-form__msg-content-container")

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  return (
    <div>
      <LinkedinAi />
    </div>
  )
}

export default PlasmoOverlay
