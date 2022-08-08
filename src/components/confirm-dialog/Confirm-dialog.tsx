import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { FunctionComponent } from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  titleText: string;
  bodyText?: string;
  onConfirm: () => void;
  onReject: () => void;
}

const ConfirmDialog: FunctionComponent<ConfirmDialogProps> = (
  {
    isOpen, titleText, bodyText, onReject, onConfirm,
  }: ConfirmDialogProps,
) => (
  <Dialog open={isOpen}>
    <DialogTitle>{titleText}</DialogTitle>
    {bodyText ? (
      <DialogContent>
        <DialogContentText>{bodyText}</DialogContentText>
      </DialogContent>
    ) : null}
    <DialogActions>
      <Button onClick={onReject}>Cancel</Button>
      <Button onClick={onConfirm}>Ok</Button>
    </DialogActions>
  </Dialog>
);

export default ConfirmDialog;
