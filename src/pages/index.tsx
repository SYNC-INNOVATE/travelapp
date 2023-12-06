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
    <div className=" flex flex-col items-center">
      <Nav></Nav>
      <section className=" w-3/6 flex flex-col items-center justify-center mt-10">
        <p className="text-4xl">Discover</p>
        <p>
          Discover our sales world. We love travel, whats happening to travel
          and how we travel
        </p>
      </section>
      <section className="w-10/12 p-6 bg-gray-300 rounded-lg mt-10">
        <p className="mb-6">Where do you want to discover ?</p>
        <section className="flex justify-between mb-6">
          <div className="flex flex-col w-1/4">
            <label htmlFor="">From-To</label>
            <input
              type="text"
              className="h-12 rounded-lg border-white border-2 bg-transparent px-4"
              placeholder="dubia - tokyo"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Trip</label>
            <input
              type="text"
              className="h-12 rounded-lg border-white border-2 bg-transparent px-4"
              placeholder="Return"
            />
          </div>
          <div className="flex flex-col bg-red-300 w-1/4">
            <label htmlFor="">Depart-Return</label>
            <input
              type="text"
              className="h-12 rounded-lg border-white border-2 bg-transparent px-4"
              placeholder="Depart date - return date"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Hotel</label>
            <input
              type="text"
              className="h-12 rounded-lg border-white border-2 bg-transparent px-4"
              placeholder="4 bed room"
            />
          </div>
        </section>
        <div className="flex gap-4">
          <button className="border-2 border-white p-5 h-12 flex items-center rounded-lg">
            Add Promo code
          </button>
          <button className="bg-green-500 p-5 h-12 flex items-center rounded-lg">
            Show Place
          </button>
        </div>
      </section>
    </div>
  );
}
