import React from 'react';
import styled from 'styled-components';

import PersonIcon from '@material-ui/icons/Person';
import firebase from 'firebase/app';
import 'firebase/storage';


import { Modal, TextField, IconButton, Button } from '../common';

const ModalContainer = styled.div`
  width: 60%;
  background-color: ${props => props.theme.palette.background.paper};
  border: 2px solid #000,
  box-shadow: ${props => props.theme.shadows[5]};
  padding: ${props => props.theme.spacing(2, 4, 3)};
  margin: auto;

  max-height: 700px;
  overflow: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

type BidFormModalProps = {
  user: firebase.User;
};

const uploadFiles = async (
  storageRef: firebase.storage.Reference,
  files: any
) => {
  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    const childStorage = storageRef.child(currentFile.name);

    const uploadedFile = await childStorage.put(currentFile);
    const downloadUrl = await uploadedFile.ref.getDownloadURL();
    console.log(downloadUrl);
  }
};

const BidFormModal: React.FunctionComponent<BidFormModalProps> = ({
  user,
}: BidFormModalProps) => {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState({});
  const [bid, setbid] = React.useState({});
  const [imagefiles, setImageFiles] = React.useState([]);
  const [pdffiles, setPdfFiles] = React.useState([]);
  const [optionimages,setOptionImages ] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleBidUpdate = (keyId: string) => (value: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBid = Object.assign({}, bid, {[keyId]:value})
    setbid(updatedBid);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onImageFileChanges = (event: any) => {
    setImageFiles(event.target.files);
  };
  const onPdfFileChanges = (event: any) => {
    setPdfFiles(event.target.files);
  };

  const onSave = async () => {
    // const storageRef = firebase.storage().ref(`${user.uid}/images/`);

    // uploadFiles(storageRef, files);
  };

  return (
    <React.Fragment>
      <IconButton edge="end" color="inherit" onClick={handleOpen}>
        Add Bid
        <PersonIcon />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <ModalContainer>
          <h1>Create a bid</h1>
          <Form noValidate autoComplete="off">
            <TextField
              id="title"
              onChange={handleBidUpdate('title')}
              label="Project title"
              placeholder="Empire state building v2.52"
              fullWidth
              margin="normal"
              helperText="It will be used to
              describe your project in an abstract way but with enough details to
              inspire confidence"
            />
            <TextField
              id="description"
              onChange={handleBidUpdate('description')}
              label="Project description"
              placeholder=""
              fullWidth
              margin="normal"
              multiline
              rows="4"
              helperText="Describe your project to the world. "
            />
            <TextField
              id="bid"
              onChange={handleBidUpdate('bid')}
              label="winning bid"
              placeholder=""
              fullWidth
              margin="normal"
              helperText="This displays the amount bid placed onto the property"
            />
            <TextField
              id="price"
              onChange={handleBidUpdate('price')}
              label="total price"
              placeholder=""
              fullWidth
              margin="normal"
              helperText="This shows the total cost of the chosen property"
            />
            <TextField
              id="construct"
              onChange={handleBidUpdate('construct')}
              label="Estimated Time of Construction"
              placeholder=""
              fullWidth
              margin="normal"
              helperText="This determines the amount of time needed to construct a building onto a property"
            />

          </Form>
          <Button onClick={onSave}>Save</Button>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default BidFormModal;
