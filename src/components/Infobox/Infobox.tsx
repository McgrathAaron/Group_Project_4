import InfoboxProps from "./InfoboxType";
import hulu from "../../assets/images/hulu.png";
import disney from "../../assets/images/disney.png";
import siminn from "../../assets/images/siminn.png";
import hbo from "../../assets/images/hbo.png"
import amazon from "../../assets/images/amazon.png"
import netflix from "../../assets/images/netflix.png"
import { PlatformLogo, Details, TextContainer, LogoContainer, BigContainer, SubHeader } from "./style";


function Infobox (props: InfoboxProps){

    const icons = Object.entries(props.streams).map( ([key, value]) => {
        if(value) {
            switch(key){
                case "disney":
                    return <PlatformLogo src={disney} alt={key} />
                case "hulu":
                    return <PlatformLogo src={hulu} alt={key} />
                case "netflix":
                    return <PlatformLogo src={netflix} alt={key} />
                case "hbo":
                    return <PlatformLogo src={hbo} alt={key} />
                case "siminn":
                    return <PlatformLogo src={siminn} alt={key} />
                case "amazon":
                    return <PlatformLogo src={amazon} alt={key} />

              default:
              break;
          }
        }
    });
    

    return (
        <BigContainer>
        <h1 className="title">
            {props.title}
        </h1>
        <Details>
            <div>{props.date}</div> -  <div>{props.rating}</div> -  <div>{props.duration}</div> 
        </Details>
        <LogoContainer>
            {
                icons
            }
        </LogoContainer>
        <TextContainer>
        <SubHeader>
            Description
        </SubHeader>
        <p>
            {props.description}
        </p>
        </TextContainer>
        <TextContainer>
        <h2 className="cast">
            Cast
        </h2>
        <p>
            {props.cast}
        </p>
        </TextContainer>
        </BigContainer>

    )
}

export default Infobox;