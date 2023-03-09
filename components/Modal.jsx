import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    {/* <CloseIcon /> */}
                x
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

// CustomizedDialogs component
export default function CustomizedDialogs(props) {
    let nftId = parseInt(props.nft.id.tokenId, 16);



    console.log("open:", props.open)
    return (
        <div className="">
            <BootstrapDialog
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
            >
                <BootstrapDialogTitle
                    className="text-center"
                    id="customized-dialog-title"
                    onClose={props.handleClose}
                >
                    <h1 className="text-3xl font-bold font-mono">{props.nft.title}</h1>
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <img src={props.nft.media[0].gateway}></img>
                    <Typography className="py-5" gutterBottom><h1 className="text-xl font-semibold font-mono">Contract Address:</h1><p className="text-sm font-mono">{props.nft.contract.address}</p></Typography>
                    <Typography gutterBottom><h1 className="text-lg font-semibold font-mono">Description:</h1><p className="text-sm font-mono">{props.nft.description}</p></Typography>
                </DialogContent>
                <DialogActions>
                    <a href={`https://opensea.io/assets/ethereum/${props.nft.contract.address}/${nftId}`}  target="_blank"><Button autoFocus>
                        Buy On OpenSea
                    </Button></a>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}