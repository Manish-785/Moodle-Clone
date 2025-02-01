import './footercard.css'

function FooterCard(props){
    return(
        <div className='footercard'>
            <a href="#announcements" id="link">{props.name}</a>
        </div>
    )
}

export default FooterCard