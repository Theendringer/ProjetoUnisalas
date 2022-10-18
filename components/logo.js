import Image from "next/image";

import logoUnisales from "../public/fotos/logoUnisales.jgp";

export default function logo(){
    return(
        <div>
            <Image src = {logoUnisales}/>
        </div>
)}