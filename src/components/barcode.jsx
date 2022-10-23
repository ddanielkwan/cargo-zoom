import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function Test() {
  const [data, setData] = React.useState("Not Found");
  const [stopStream, setStopStream] = React.useState(false);

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        stopStream={stopStream}
        onUpdate={(err, result) => {
          if (result) {
            

            //itemId = result._id
            //get api link https://pacific-eyrie-13165.herokuapp.com/companies/feb2022-5/los for GET itemID
            //if current itemId in api response body 
            //set itemId as validated
            //update database or POST to API 
            //else if itemId not in response body of items aPI
            //call function
            //function () {
                //mark itemId in database as location: x
            //}
          } else {
            setData("Not Found");
          }
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default Test;
