import { useCallback } from "react";
import { Box } from "@mui/material";
import ShippingForm from '../utils/ShippingForm';

type ProductType = {
  productId: any
  referrer: any
  theme: any
};

const CallbackLearn = (props: ProductType) => {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + props.productId + '/buy', {
      referrer: props.referrer,
      orderDetails: orderDetails,
    });
  }, [props.productId, props.referrer]);


  // const handleSubmit = (orderDetails) => {
  //   console.log('callback called')
  //   post('/product/' + props.productId + '/buy', {
  //     referrer: props.referrer,
  //     orderDetails: orderDetails,
  //   });
  // };


    return (
      <>
        <Box className={props.theme}>
          <ShippingForm onSubmit={handleSubmit} />
        </Box>
      </>
    )
}

const post = (url, data) => {
  // Imagine this sends a request...
  console.log('POST /' + url);
  console.log(data);
}


export default CallbackLearn;