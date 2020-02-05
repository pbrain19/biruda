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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

type ListingFormModalProps = {
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

const ListingFormModal: React.FunctionComponent<ListingFormModalProps> = ({
  user,
}: ListingFormModalProps) => {
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onFileChanges = (event: any) => {
    setFiles(event.target.files);
  };

  const onSave = async () => {
    const storageRef = firebase.storage().ref(`${user.uid}/images/`);

    uploadFiles(storageRef, files);
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
            <input type="file" onChange={onFileChanges} />
          </Form>
          <Button onClick={onSave}>Save</Button>
        </ModalContainer>
      </Modal>
    </React.Fragment>
  );
};

export default ListingFormModal;
