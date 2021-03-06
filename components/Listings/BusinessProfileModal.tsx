import React from 'react';
import styled from 'styled-components';
import { uploadFiles } from '../../common/imageUpload';
import { fetchWrapper } from '../../utils/fetch-wrapper';

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

type BusinessFormModalProps = {
  user: firebase.User;
};

const BusinessFormModal: React.FunctionComponent<BusinessFormModalProps> = ({
  user,
}: BusinessFormModalProps) => {
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState({});
  const [listing, setListing] = React.useState({});
  const [imagefiles, setImageFiles] = React.useState([]);
  const [pdffiles, setPdfFiles] = React.useState([]);
  const [optionimages, setOptionImages] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOptionUpdate = (keyId: string) => (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedOption = Object.assign({}, option, { [keyId]: value });
    setOption(updatedOption);
  };
  const handleListingUpdate = (keyId: string) => (
    value: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedListing = Object.assign({}, listing, { [keyId]: value });
    setListing(updatedListing);
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

  const onOptionImagesChange = (event: any) => {
    setOptionImages(event.target.files);
  };

  const onSave = async () => {
    const storageRef = firebase.storage().ref(`${user.uid}/`);
    const imagesUrls = await uploadFiles(storageRef, imagefiles);
    const pdfUrls = await uploadFiles(storageRef, pdffiles);
    const optionsImagesUrl = await uploadFiles(storageRef, optionimages);
    const payload = Object.assign({}, listing, {
      images: imagesUrls,
      pdfProposal: pdfUrls[0],
    });
    const newListing = await fetchWrapper('/api/listings', {
      method: 'POST',
      // eslint-disable-next-line no-undef
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify(payload),
    });
  };

  return (
    <React.Fragment>
      <IconButton edge="end" color="inherit" onClick={handleOpen}>
        Add Listing
        <PersonIcon />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <ModalContainer>
          <h1>Create a listing</h1>
          <p>
            Listing your project has a few requirements. Ideally your project
            will contain a description, project name, images, a walkthrough
            video, a prospectus, a timeline, a cost. The images and walkthrough
            video of the project will be used to show case your idea in a visual
            level. The prospectus should offer a business/project plan
            detailing, the risks, costs, legal requirements, payments required,
            and other factors that will touch the project. The timeline and
            costs should be detailed in the prospectus but should be highlighted
            as top level items. A listing implies the listing party has done
            enough research and understands the risks involved to get as close
            as estimate as possible.
          </p>
          <Form noValidate autoComplete="off">
            <TextField
              id="title"
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
              label="Project description"
              s
              placeholder=""
              fullWidth
              margin="normal"
              multiline
              rows="4"
              helperText="Describe your project to the world. "
            />

            <TextField
              id="videoUrl"
              label="Video url"
              placeholder=""
              fullWidth
              margin="normal"
              multiline
              rows="4"
              helperText="A walkthru of your potential project"
            />

            <TextField
              id="BusinessProfile"
              label="Business profile"
              placeholder=""
              fullWidth
              margin="normal"
              multiline
              rows="4"
              helperText="The business description."
            />

            <input type="file" onChange={onFileChanges} />
          </Form>
          <Button onClick={onSave}>Save</Button>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default BusinessFormModal;
