import './style.css'
import BannerBemVindo from '../../components/core/BannerBemVindo'
import Footer from '../../components/core/Footer'

const BemVindo = ({ ...props }) => {
    const { isStudent } = props
    return (
        <>
            <BannerBemVindo />
            <Footer />
        </>
    )
}

export default BemVindo