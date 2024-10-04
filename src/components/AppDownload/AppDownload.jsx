
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='appDownload' id='appDownload'>
            <p>For better Experience Download <br /> <span>Tomato App</span></p>
            <div className='appDownloadPlatform'>
                <img src={assets.play_store} alt="play-store" />
                <img src={assets.app_store} alt='apple-store' />

            </div>
        </div>
    )
}

export default AppDownload
