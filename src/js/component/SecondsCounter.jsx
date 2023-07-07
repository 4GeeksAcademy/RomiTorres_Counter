import React from "react";
import reactDom from "react-dom";



  const SecondsCounter = (props) => {
    let unit = props.counter;
    let ten = 0;
    let hundred = 0;
    let thousand = 0;
    let tenThousand = 0;
    let hunThousand = 0;
    if(props.counter > 9){
        ten =   Math.trunc(props.counter / 10);
        unit = props.counter % 10;
        if (ten > 9){
            hundred =  Math.trunc(ten / 10);
            ten = ten % 10;
            if(hundred > 9){
                thousand = Math.trunc(hundred / 10);
            }
          }}

  return (
    <div className="app d-flex justify-content-center">
            <div className="icon box"><i className="far fa-clock"></i></div>
            <div className="counter box ">{hunThousand}</div>
            <div className="counter box ">{tenThousand}</div>
            <div className="counter box ">{thousand}</div>
            <div className="counter box ">{hundred}</div>
            <div className="counter box ">{ten}</div>
            <div className="counter box ">{unit}</div>
        </div>
  )
}

export default SecondsCounter;