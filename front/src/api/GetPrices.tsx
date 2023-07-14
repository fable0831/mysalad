import axios from 'axios';

const GetPrices = async () => {
  try {
    const response = await axios.get(
      `http://www.kamis.or.kr/service/price/xml.do?action=dailySalesList&p_cert_key=${process.env.GROCERY_KEY}&p_cert_id=${process.env.GROCERY_ID}&p_returntype=json`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`GetPrices doesn't work`);
  }
};

export default GetPrices;
