import InfoboxProps from "./InfoboxType";
import hulu from "../../assets/images/hulu.png";
import disney from "../../assets/images/disney.png";
import siminn from "../../assets/images/siminn.png";
import hbo from "../../assets/images/hbo.png";
import amazon from "../../assets/images/amazon.png";
import netflix from "../../assets/images/netflix.png";
import { PlatformLogo } from "./style";

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

            //   case "hbo":
            //     return <image src={`${key}.png`} alt={key} />
    
              default:
              break;
          }
        }
    });
    

    return (
        <>
        <h1 className="title">
            {props.title}
        </h1>
        <span>
            {props.date} - {props.rating} - {props.duration} 
        </span>
        <div>
            {
                icons
            }
        </div>
        <h2 className="description">
            description
        </h2>
        <p>
            {props.description}
        </p>

        </>

    )
}

export default Infobox;