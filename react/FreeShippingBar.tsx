import React, { useEffect, useState } from 'react';
import { useOrderForm } from 'vtex.order-manager/OrderForm'
// import { useOrderItems } from 'vtex.order-items/OrderItems'
// import UpdateItemMutation from 'vtex.checkout-resources/MutationUpdateItem';
interface FreeShippingBarProps {}

const MIN_VALUE = 200000;

const FreeShippingBar: StorefrontFunctionComponent<FreeShippingBarProps> = () => {
  const { orderForm: { items, value } } = useOrderForm();
  const [ porcentagemFaltante, setPorcentagemFaltante ] = useState(0);

  useEffect(() => {
    console.log('orderform:', items, (((value/MIN_VALUE)*100)));

    setPorcentagemFaltante(((value/MIN_VALUE)*100));
  }, [value]);


  const myStyle  = {
    width: `${porcentagemFaltante}%`,
    backgroundColor: 'blue'
  };

  return (
    <div>
      <div style={myStyle}>
        <h1>{MIN_VALUE - value}</h1>
      </div>
    </div>
  )
};

FreeShippingBar.schema = {
  title: 'editor.freeShippingBar.title',
  description: 'editor.freeShippingBar.description',
  type: 'object',
  properties: {},
};

export default FreeShippingBar;