import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={260}
    height={410}
    viewBox="0 0 260 410"
    backgroundColor="#d6d6d6"
    foregroundColor="#6e6e6e"
  >
    <rect x="22" y="187" rx="0" ry="0" width="260" height="30" /> 
    <circle cx="132" cy="90" r="90" /> 
    <rect x="23"  y="233" rx="0" ry="0" width="260" height="85" /> 
    <rect x="23"  y="328" rx="0" ry="0" width="90"  height="27" /> 
    <rect x="150" y="328" rx="0" ry="0" width="132" height="27" />
  </ContentLoader>
)

export default MyLoader