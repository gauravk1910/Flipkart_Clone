 import PaytmChecksum from '../paytm/PaytmChecksum.js';
 import { paytmMerchantKey, paytmParams } from '../index.js';

 export const addPaymentGateway = async(request, response) => {
    let PaytmCheckSum= await PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey);

    try {
         
         let params= {
            ...paytmParams, 'CHECKSUMHASH' : PaytmCheckSum
         }

         response.status(200).json(params);
    } catch(error){
        response.status(500).json({error:error.message});
    }
 }