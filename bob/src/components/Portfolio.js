import React, { useState } from "react";
import axios from "axios";


function Portfolio() {
  
  const API_URL = "https://unstoppabledomains.g.alchemy.com/domains/";
  const API_KEY1 = "OPnt5xBjF7t5cIhhqwpZ42iXOoqCut_-";

  const [stats, setStats] = useState(null);


  function processLookup(e) {
    e.preventDefault();

    let domain = document.getElementById("domain").value;
    if (!domain) return;

    axios
      .get(API_URL + domain, {
        headers: {
          Authorization: `bearer ${API_KEY1}`,
        },
      })
      .then((res) => {
        setStats(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        setStats();
      });
  }



  return (
    <>
      <div className="flex flex-col px-24 relative justify-center items-center">
        <div className=" bg-[#0f172a4d] rounded-3xl p-7 mt-6 ">
          <div className="flex flex-col">
            <h4>Domain </h4>
       
          </div>

          <input
            id="domain"
            type="text"
            placeholder="Enter a domain name"
            aria-label="Enter a domain name"
            aria-describedby="button-addon"
            autoComplete="off"
            className=" mt-5 border-[#334155] border bg-[#1E293B] rounded-lg text-[#DBEAFE] py-2 px-10 w-[600px]"
          />
          <div className="flex mt-5">
         
            <button
              className="font-roboto text-white border-2 px-[60px] py-2 border-[#22C55E] hover:bg-[#22C55E] mb-10"
              onClick={processLookup}
            >
              Search
            </button>
          </div>


          <div className="">
            {stats ? (
              <div>
                <h6>Domain Name - {stats.meta.domain}</h6>
                <h6>Owned by - {stats.meta.owner}</h6>
                <h6>Blockchain - {stats.meta.blockchain}</h6>
                <div>
                  {stats.records["ipfs.redirect_domain.value"] ? (
                    <h6>
                      Website - {stats.records["ipfs.redirect_domain.value"]}
                    </h6>
                  ) : (
                    <div>
                      <h6>No Website found</h6>
                    </div>
                  )}
                </div>
                <div>
                  <h6>Blockchain addresses in the domain</h6>
                  <div>
                    {stats.records["crypto.ETH.address"] ? (
                      <h6>
                        ETH Address : {stats.records["crypto.ETH.address"]}
                      </h6>
                    ) : (
                      <div>
                        <h6>No ETH address</h6>
                      </div>
                    )}
                  </div>
                  <div>
                    {stats.records["crypto.MATIC.version.MATIC.address"] ? (
                      <h6>
                        MATIC Address :{" "}
                        {stats.records["crypto.MATIC.version.MATIC.address"]}
                      </h6>
                    ) : (
                      <div>
                        <h6>No Matic address</h6>
                      </div>
                    )}
                  </div>

                  <button className="font-roboto  mt-3 px-[60px] py-2 border-gradient-1  mb-10">
                    <a
                      className="contactlink"
                      target="_blank"
                      href={`${stats.records["ipfs.redirect_domain.value"]}`}
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
