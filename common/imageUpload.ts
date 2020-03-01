export const uploadFiles = async (
  storageRef: firebase.storage.Reference,
  files: any
) => {
  const urls = [];
  for (let i = 0; i < files.length; i++) {
    const currentFile = files[i];
    const childStorage = storageRef.child(currentFile.name);

    const uploadedFile = await childStorage.put(currentFile);
    const downloadUrl = await uploadedFile.ref.getDownloadURL();
    urls.push(downloadUrl);
  }

  return urls;
};
