import axios from "axios";

export const fetchPrices = async () => {
  try {
    const response = await axios.get(
      `http://www.kamis.or.kr/service/price/xml.do?action=dailySalesList&p_cert_key=${process.env.GROCERY_KEY}&p_cert_id=${process.env.GROCERY_ID}&p_returntype=json`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch prices from the API");
  }
};
