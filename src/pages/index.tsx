import { useState, useEffect } from "react";
import { Web5 } from '@web5/api';


export default function Home() {
  const [web5, setWeb5] = useState(null);
  const [myDid, setMyDid] = useState(null);


  useEffect(() => {
    const initWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      setWeb5(web5);
      setMyDid(did);
    };
    initWeb5();
  }, []);

  console.log(myDid)


  return (
    <main
    >
      
    </main>
  )
}
