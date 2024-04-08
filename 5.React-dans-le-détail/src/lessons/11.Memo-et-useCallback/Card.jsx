import { memo} from 'react'

export default memo(function ({txt, customLog}) {

    customLog
    console.log("RENDER");
    return (
        <div>
            <p>Carte</p>
            <p>{txt}</p>
        </div>
    )
})
