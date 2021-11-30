import { identity, ipfsUrlDefault, } from "../../../src/utils"
import { test1 } from "../../../src/fetchers/ethers/standard-nft"
import { getDefaultProvider, } from "ethers"

const ethersConfig = {
      provider: getDefaultProvider("homestead"),
}

const FETCH_CONTEXT = {
  imageProxy: identity,
  ipfsUrl: ipfsUrlDefault,
  jsonProxy: identity,
}


describe("checks fetchMetadata() function()", () => {
      it("blah", async () => {
            let data = await test1(
                  '0x495f947276749ce646f68ac8c248420045cb7b5e',
                  '82559271288720098553715261024631968648129933536552654637251159429333647360001',
                  ethersConfig,
                  FETCH_CONTEXT
            );
            expect(data).toStrictEqual({
                  name: "CryptoPython #496",
                  description: "",
                  image: `https://lh3.googleusercontent.com/CkIdaN5eMe3RIrA-jWkr2rPe2MuNJig2UEHjWvvHaq4I4ZS0BfZZJIqa2gkOAUs9DrNozGJqEOJrDvi5Ky_cnLxKxKaupDzzwhUi`,
                  rawData: {
                        "name": "CryptoPython #496",
                        "description": "",
                        "external_link": null,
                        "image": "https://lh3.googleusercontent.com/CkIdaN5eMe3RIrA-jWkr2rPe2MuNJig2UEHjWvvHaq4I4ZS0BfZZJIqa2gkOAUs9DrNozGJqEOJrDvi5Ky_cnLxKxKaupDzzwhUi",
                        "animation_url": null
                    },
            })
      })
})
