const FooterInformation = (props) => {
    return (
        <div className="px-8 pt-8 sm:px-6 sm:pt-6">
        <img src={props.sticker}/>
        <h4 className="font-medium sm:font-normal md:font-medium">{props.judulfooter}</h4>
        <p className="sm:font-extralight sm:text-sm md:font-normal md:text-base">{props.isi1}</p>
        <p className="sm:font-extralight sm:text-sm md:font-normal md:text-base">{props.isi2}</p>
        <p className="sm:font-extralight sm:text-sm md:font-normal md:text-base">{props.isi3}</p>
        <p className="sm:font-extralight sm:text-sm md:font-normal md:text-base">{props.isi4}</p>
        <p className="sm:font-extralight sm:text-sm md:font-normal md:text-base">{props.isi5}</p>

        </div>
    );
}

export default FooterInformation;