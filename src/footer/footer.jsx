import './footer.css'
import FooterCard from './footercard'

function Footer(){
    return(
        <div className='footercards'>
            <FooterCard className="fc1"name="Announcements"></FooterCard>
          <FooterCard className="fc2" name="Course Content"></FooterCard>
        </div>
    )
}

export default Footer