import React from 'react'
import style from "./SearchBar.module.css"

function video() {
    return (
        <>
            <div classNane={style.vid}>
                <video loop autoPlay muted>
                    <source src="https://mega.nz/file/XBBhDaJQ#zkvTPbo52uyyxMM93swgQWgKEorfBUcOQCI1RkElUaw"  type="video/mp4"/>
                </video>
            </div>
        </>
  )
}

export default video
