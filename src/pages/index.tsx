import { useState, useEffect } from "react";
import { Web5 } from '@web5/api';
import Nav from "@/components/Nav";


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

  // console.log(myDid)


  return (
    <div className="bg-green-300 flex flex-col items-center ">
      <Nav></Nav>
      <section className="bg-red-400 w-3/6 flex flex-col items-center justify-center mt-10">
        <p>Discover</p>
        <p>
          Discover our sales world. We love travel, whats happening to travel
          and how we travel
        </p>
      </section>
      <section className="w-10/12 bg-red-600 px-6">
        <p>Where do you want to discover ?</p>
        <section className="flex justify-between">
          <div className="flex flex-col">
            <label htmlFor="">From-To</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Trip</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Depart-Return</label>
            <input type="text" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Hotel</label>
            <input type="text" />
          </div>
        </section>
        <div>
          <button>Add Promo code</button>
          <button className="bg-green-500">Show Place</button>
        </div>
      </section>
    </div>
  );
}
