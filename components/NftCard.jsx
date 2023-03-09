import CustomizedDialogs from './Modal';
import React from 'react';

// NFTCard component
export const NFTCard = ({ nft }) => {
  let CustomTag = "";

  if (nft.media[0].format == "mp4") {
    CustomTag = "video";
  } else {
    CustomTag = "img";
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (props) => {
    console.log("handleClose called")
    setOpen(false);

    console.log(open)
  };

  let src = nft.media[0].gateway;

  if (src != "" && nft.media[0].format) {
    return (
      <div className="w-1/4 flex flex-col translate" onClick={handleClickOpen}>
        <CustomizedDialogs
          nft={nft}
          open={open}
          handleClose={handleClose}
        />
        <div className="rounded-md">
          <CustomTag
            autoPlay
            muted
            loop
            className="object-cover h-64 w-full rounded-t-md"
            src={nft.media[0].gateway}
          ></CustomTag>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110">
          <div className="">
            <h2 className="text-xl text-center text-gray-800">{nft.title}</h2>
          </div>
        </div>
      </div>
    );
  }
};